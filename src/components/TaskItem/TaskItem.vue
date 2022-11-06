<script setup lang="ts">
import { reactive } from 'vue'
import {
  Disclosure, DisclosureButton,
  DisclosurePanel,
  Listbox,
  ListboxButton, ListboxOption, ListboxOptions, Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import { ChevronUpIcon } from '@heroicons/vue/20/solid'
import { ClockIcon, PencilIcon } from '@heroicons/vue/24/outline'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import BookmarksIcon from '../Icons/BookmarksIcon.vue'
import MoreHorizIcon from '../Icons/MoreHorizIcon.vue'
import TaskItemHeader from './TaskItemHeader.vue'
import TaskItemDetailWrapper from './TaskItemDetailWrapper.vue'

interface TaksItem {
  date: string
  description: string
  bookmarks: Array<Bookmark>
}
interface Bookmark {
  label: string
  background: string
}
const bookmarkList: Array<Bookmark> = [
  { label: 'Important ASAP', background: 'bg-sticker-one' },
  { label: 'Offline Meeting', background: 'bg-sticker-two' },
  { label: 'Virtual Meeting', background: 'bg-sticker-three' },
  { label: 'ASAP', background: 'bg-sticker-four' },
  { label: 'Client Related', background: 'bg-sticker-five' },
  { label: 'Self Task', background: 'bg-sticker-six' },
  { label: 'Appointments', background: 'bg-sticker-seven' },
  { label: 'Court Related', background: 'bg-[#9DD0ED]' },
]

const taksItem = reactive<TaksItem>({
  date: '',
  description: '',
  bookmarks: [
    bookmarkList[0],
  ],
})

const format = (date: any) => {
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()

  return `${day}/${month}/${year}`
}
</script>

<template>
  <div class="flex w-full item-start py-[22px] ">
    <Disclosure v-slot="{ open }">
      <div class="flex-1 flex-col h-full">
        <TaskItemHeader>
          <DisclosureButton>
            <ChevronUpIcon
              :class="open ? 'rotate-180 transform' : ''"
              class="h-5 w-5 "
            />
          </DisclosureButton>
        </TaskItemHeader>
        <DisclosurePanel class="px-2 mt-4 flex flex-col space-y-4">
          <TaskItemDetailWrapper>
            <ClockIcon :class="taksItem.date ? 'text-primary-one' : 'text-gray-600'" class=" w-5 h-5" />
            <Datepicker v-model="taksItem.date" :esc-close="true" :format="format" auto-apply position="right" placeholder="Select Date" />
          </TaskItemDetailWrapper>
          <TaskItemDetailWrapper>
            <PencilIcon
              class="w-5 h-5"
              :class="[taksItem.description.trim() ? 'text-primary-one' : 'text-gray-600']"
            />
            <textarea
              v-model="taksItem.description"
              className="rounded-[5px] border border-secondary w-full"
              rows="4"
            />
          </TaskItemDetailWrapper>
          <TaskItemDetailWrapper>
            <BookmarksIcon
              class="w-5 h-5 "
              fill="fill-primary-one"
            />
            <Listbox v-model="taksItem.bookmarks" multiple>
              <div class="relative">
                <ListboxButton class="flex w-full flex-wrap gap-3">
                  <span v-if="taksItem.bookmarks.length <= 0">No Bookmark</span>
                  <button
                    v-for="item in taksItem.bookmarks"
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
                    <ListboxOption v-for="item in bookmarkList" :key="item.label" :value="item">
                      <li
                        class="relative cursor-default select-none py-2 pl-10 pr-4"
                        :class="[
                          item.background,
                        ]"
                      >
                        <span
                          class="block truncate"
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
              class="group flex w-full items-center px-2 py-2 text-sm" :class="[
                active ? ' bg-primary-one text-white' : ' text-primary-one',
              ]"
            >
              Delete
            </button>
          </MenuItem>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
