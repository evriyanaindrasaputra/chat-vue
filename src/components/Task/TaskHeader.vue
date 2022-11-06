<script setup lang="ts">
import { ref } from 'vue'
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from '@headlessui/vue'
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/20/solid'
import IButton from '../Button/IButton.vue'

const categories = [
  { name: 'My Task' },
  { name: 'Personal Errands' },
  { name: 'Urgent To-Do' },
]

const selectedCategory = ref(categories[0])
</script>

<template>
  <div class="px-8 bg-white z-10 flex items-center justify-between">
    <div class="w-48">
      <Listbox v-slot="{ open }" v-model="selectedCategory">
        <div class="relative mt-1">
          <ListboxButton
            class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
          >
            <span class="block truncate">{{ selectedCategory.name }}</span>
            <span
              class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
            >
              <ChevronUpIcon
                v-if="open"
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <ChevronDownIcon
                v-else
                class="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>

          <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
          >
            <ListboxOptions
              class="absolute mt-1 max-h-60 w-full overflow-auto divide-y divide-gray-200 rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
            >
              <ListboxOption
                v-for="person in categories"
                v-slot="{ active, selected }"
                :key="person.name"
                :value="person"
                as="template"
              >
                <li
                  class="relative cursor-default select-none py-2 pl-10 pr-4"
                  :class="[
                    active ? ' bg-primary-one text-white' : ' text-primary-one',
                  ]"
                >
                  <span
                    class="block truncate"
                    :class="[
                      selected ? 'font-medium' : 'font-normal',
                    ]"
                  >{{ person.name }}</span>
                </li>
              </ListboxOption>
            </ListboxOptions>
          </transition>
        </div>
      </Listbox>
    </div>
    <IButton>
      New Task
    </IButton>
  </div>
</template>
