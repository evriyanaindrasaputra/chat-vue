<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import MoreHorizIcon from '~/components/Icons/MoreHorizIcon.vue'

defineProps<{
  ownUser: boolean
  userName?: string
  message: string
  datetime: string
}>()
</script>

<template>
  <div class="w-full max-w-sm " :class="[ownUser ? 'self-end' : '']">
    <p class="text-chats-two-darken" :class="[ownUser ? 'text-right' : '']">
      {{ ownUser ? 'You' : userName }}
    </p>
    <div class="flex items-start gap-1" :class="[ownUser ? 'flex-row-reverse' : '']">
      <div class="bg-chats-two p-4 rounded">
        <p class=" text-gray-700 text-sm">
          {{ message }}
        </p>
        <span class="text-gray-700 text-xs">{{ datetime }}</span>
      </div>
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
            class="absolute mt-2 w-24 divide-y divide-primary-three rounded-md bg-white shadow-lg ring-1 focus:outline-none"
          >
            <MenuItem v-slot="{ active }">
              <button
                class="group flex w-full items-center px-2 py-2 text-sm" :class="[
                  active ? ' bg-primary-one text-white' : ' text-primary-one',
                ]"
              >
                Edit
              </button>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button
                class="group flex w-full items-center px-2 py-2 text-sm" :class="[
                  active ? ' bg-primary-one text-white' : ' text-primary-one',
                ]"
              >
                Duplicate
              </button>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>
