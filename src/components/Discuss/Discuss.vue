<script setup lang="ts">
import IButton from '../Button/IButton.vue'
import PersonIcon from '../Icons/PersonIcon.vue'
</script>

<template>
  <div class="flex py-[22px] space-x-[17px] border-b border-gray-400">
    <!-- avatar -->
    <IButton class="self-start" pill icon>
      <PersonIcon class="w-4 h-4" />
    </IButton>
    <!-- description -->
    <div class="w-full">
      <!-- header -->
      <div class="flex font-semibold text-md leading-tight items-start">
        <span class=" text-primary-one mr-1">Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]</span>
        <span class="flex-shrink-0 font-normal text-gray-500">02/06/2021 10:45</span>
      </div>
      <!-- sender -->
      <p class="font-semibold">
        Cameron Phillips :
      </p>
      <!-- message -->
      <span class="text-gray-700 text-sm">Please check this out!</span>
    </div>
  </div>
</template>
