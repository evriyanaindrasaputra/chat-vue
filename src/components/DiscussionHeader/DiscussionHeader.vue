<script setup lang="ts">
import ArrowBackIcon from '../Icons/ArrowBackIcon.vue'
import CloseIcon from '../Icons/CloseIcon.vue'

// emit to back list discuss
const emit = defineEmits(['backDiscuss'])
</script>

<template>
  <div>
    <div class="flex items-center px-8 pb-4 space-x-3">
      <button @click="emit('backDiscuss')">
        <ArrowBackIcon class="w-4 h-4 " fill="fill-black" />
      </button>
      <div class="items-start flex-1 leading-tight text-base font-semibold">
        <p class="text-primary-one">
          I-589 - AMARKHIL, Obaidullah [Affirmative Filing with ZHN]
        </p>
        <span class="font-medium text-xs text-gray-700">3 Participants</span>
      </div>
      <button>
        <CloseIcon class="w-4 h-4 " fill="fill-black" />
      </button>
    </div>
    <hr>
  </div>
</template>
