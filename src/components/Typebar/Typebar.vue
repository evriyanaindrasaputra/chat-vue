<script setup lang="ts">
import IButton from '../Button/IButton.vue'
</script>

<template>
  <div class="flex px-8 pt-2 items-center gap-2">
    <input
      type="text"
      aria-label="message"
      placeholder="Type a new message"
      class="p-2 flex-1  text-gray-500 bg-gray-50 rounded-lg border border-gray-300 "
    >
    <IButton>
      send
    </IButton>
  </div>
</template>
