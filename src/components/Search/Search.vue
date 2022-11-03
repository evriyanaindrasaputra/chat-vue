<script setup lang="ts">
import SearchIcon from '../Icons/SearchIcon.vue'
</script>

<template>
  <form class="px-8">
    <div class="relative">
      <input
        type="text"
        aria-label="search"
        placeholder="Search"
        class="block p-1 px-10 w-full text-[12px] text-gray-500 bg-gray-50 rounded-lg border border-gray-300 focus:ring-green-500 focus:border-green-500"
      >
      <button type="submit" class=" absolute inset-y-0 right-5">
        <SearchIcon class="w-3 h-3" fill="fill-gray-500" />
      </button>
    </div>
  </form>
</template>
