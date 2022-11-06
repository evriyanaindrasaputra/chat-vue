<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import CheckboxIcon from '../Icons/CheckboxIcon.vue'
import CheckboxOutlineIcon from '../Icons/CheckboxOutlineIcon.vue'

const isDone = ref(true)
const isEdit = ref<boolean>(false)
const title = ref<string>('Cross-reference with Jeanne for Case #192813')

const handleEdit = () => isEdit.value = !isEdit.value
</script>

<template>
  <div class="flex gap-3  items-start">
    <div>
      <Switch v-slot="{ checked }" v-model="isDone" as="template">
        <button>
          <CheckboxIcon v-if="checked" class="w-6 h-6" fill="fill-blue-600" />
          <CheckboxOutlineIcon v-else class="w-6 h-6" fill="fill-gray-600" />
        </button>
      </Switch>
    </div>
    <div className="flex-1">
      <p
        v-if="!isEdit"
        class="text-black font-semibold"
        :class="[isDone ? 'line-through' : '']"
        @dblclick="handleEdit"
      >
        {{ title }}
      </p>
      <input
        v-else
        v-model="title"
        type="text"
        class="rounded-[5px] border border-secondary w-full"
        placeholder="Type Task Title"
        @keyup.enter="handleEdit"
        @keyup.esc="handleEdit"
      >
    </div>
    <div class="flex-shrink-0 flex items-start gap-2 font-normal text-sm">
      <span v-if="!isDone" class=" text-indicator-three">2 Days Left</span>
      <span class=" text-gray-500">12/06/20215</span>
      <slot />
    </div>
  </div>
</template>
