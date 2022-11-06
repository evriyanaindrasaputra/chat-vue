<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import CheckboxIcon from '../Icons/CheckboxIcon.vue'
import CheckboxOutlineIcon from '../Icons/CheckboxOutlineIcon.vue'
const enabled = ref(true)
</script>

<template>
  <div class="flex gap-3  items-start">
    <div>
      <Switch v-slot="{ checked }" v-model="enabled" as="template">
        <button>
          <CheckboxIcon v-if="checked" class="w-6 h-6" fill="fill-blue-600" />
          <CheckboxOutlineIcon v-else class="w-6 h-6" fill="fill-gray-600" />
        </button>
      </Switch>
    </div>
    <div className="flex-1">
      <input
        type="text"
        class="rounded-[5px] border border-secondary w-full"
        placeholder="Type Task Title"
      >
    </div>
    <div class="flex-shrink-0 flex items-start gap-3">
      <span class=" font-normal text-gray-500">12/06/20215</span>
      <slot />
    </div>
  </div>
</template>
