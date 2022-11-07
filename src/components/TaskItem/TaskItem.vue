<script setup lang="ts">
import { ref, watch } from 'vue'
import {
  Disclosure, DisclosureButton,
  DisclosurePanel,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
  Menu, MenuButton, MenuItem, MenuItems,
} from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import { ClockIcon } from '@heroicons/vue/24/outline'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import BookmarksIcon from '../Icons/BookmarksIcon.vue'
import MoreHorizIcon from '../Icons/MoreHorizIcon.vue'
import TaskItemHeader from './TaskItemHeader.vue'
import TaskItemDetailWrapper from './TaskItemDetailWrapper.vue'
import TaskItemDescription from './TaskItemDescription.vue'
import { bookmarkList, useTask } from '~/composables/task'
import { formatDate } from '~/composables/utils'
const { taskItem } = defineProps(['taskItem'])
const { deleteTask } = useTask()
const TaskItem = ref(taskItem)
</script>

<template>
  <div class="flex w-full item-start py-[22px] ">
    <Disclosure v-slot="{ open }" default-open>
      <div class="flex-1 flex-col h-full">
        <TaskItemHeader
          :title="TaskItem.title"
          :date="TaskItem.date"
          :done="TaskItem.done"
        >
          <DisclosureButton>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 "
            />
          </DisclosureButton>
        </TaskItemHeader>
        <DisclosurePanel class="px-2 mt-4 flex flex-col space-y-4">
          <TaskItemDetailWrapper>
            <ClockIcon :class="TaskItem.date ? 'text-primary-one' : 'text-gray-600'" class=" w-5 h-5" />
            <Datepicker
              v-model="TaskItem.date"
              :esc-close="true"
              :format="formatDate"
              auto-apply
              position="right"
              placeholder="Select Date"
            />
          </TaskItemDetailWrapper>
          <TaskItemDescription
            :initial-description="taskItem.description"
          />
          <TaskItemDetailWrapper>
            <BookmarksIcon
              class="w-5 h-5 "
              fill="fill-primary-one"
            />
            <Listbox v-model="TaskItem.bookmarks" multiple>
              <div class="relative">
                <ListboxButton class="flex w-full flex-wrap gap-3">
                  <span v-if="TaskItem.bookmarks.length <= 0">No Bookmark</span>
                  <button
                    v-for="item in TaskItem.bookmarks"
                    :key="item.label"
                    class="rounded px-2 py-1 text-sm"
                    :class="[item.background]"
                  >
                    {{ item.label }}
                  </button>
                </ListboxButton>
                <transition
                  leave-active-class="transition duration-100 ease-in"
                  leave-from-class="opacity-100"
                  leave-to-class="opacity-0"
                >
                  <ListboxOptions
                    v-slot="{ selected }"
                    class="absolute z-10 mt-1 max-h-60 w-56 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                  >
                    <ListboxOption v-for="item in bookmarkList" :key="item.label" class="p-2 space-y-2" :value="item">
                      <li
                        class="relative rounded cursor-default select-none py-2 pl-10 pr-4"
                        :class="[
                          item.background,
                        ]"
                      >
                        <span
                          class="block text-sm truncate"
                          :class="[
                            selected ? 'font-medium' : 'font-normal',
                          ]"
                        >{{ item.label }}</span>
                      </li>
                    </ListboxOption>
                  </ListboxOptions>
                </transition>
              </div>
            </Listbox>
          </TaskItemDetailWrapper>
        </DisclosurePanel>
      </div>
    </Disclosure>
    <Menu as="div" class="relative">
      <MenuButton>
        <MoreHorizIcon class="w-4 h-4 " fill="fill-black" />
      </MenuButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-24 divide-y divide-primary-three rounded-md bg-white shadow-lg ring-1 focus:outline-none"
        >
          <MenuItem v-slot="{ active }">
            <button
              class="group flex w-full items-center px-2 py-2 text-sm"
              :class="[
                active ? ' bg-indicator-three text-white' : ' text-indicator-three',
              ]" @click="deleteTask(TaskItem.id)"
            >
              Delete
            </button>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
