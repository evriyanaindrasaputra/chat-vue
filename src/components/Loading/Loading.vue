<script setup lang="ts">
import LoadingIcon from '../Icons/LoadingIcon.vue'
defineProps<{ text: string }>()
</script>

<template>
  <div className="flex flex-col items-center justify-center w-full h-screen space-y-3">
    <LoadingIcon class=" w-14 h-14 animate-spin" />
    <span>{{ text }}</span>
  </div>
</template>
