<script setup lang="ts">
import SearchIcon from '../Icons/SearchIcon.vue'
</script>

<template>
  <div class="flex flex-row min-h-screen bg-gray-100 text-gray-800">
    <aside
      class="sidebar w-64 md:shadow transform -translate-x-full md:translate-x-0 transition-transform duration-150 ease-in bg-primary-two border-r-2 border-primary-four"
    />
    <div class="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
      <header class="header bg-primary-three shadow py-4 px-4">
        <div class="header-content flex items-center flex-row">
          <SearchIcon fill="fill-primary-four" class="w-4 h-4" />
        </div>
      </header>
      <div class="main-content flex flex-col flex-grow p-4 relative bg-primary-two">
        <main>
          <slot />
        </main>
      </div>
    </div>
  </div>
</template>
