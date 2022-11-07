<script setup lang="ts">
defineProps<{ menu: string }>()
</script>

<template>
  <div
    class="w-[734px] h-[550px] transition-all ease-in-out duration-500 flex flex-col rounded py-6  bg-white absolute bottom-36 right-5"
    :class="[menu !== 'Menu' ? 'translate-x-0 right-5' : 'translate-x-full right-0']"
  >
    <slot />
  </div>
</template>
