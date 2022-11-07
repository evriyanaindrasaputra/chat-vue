<script setup lang="ts">
import IButton from '../Button/IButton.vue'
import PersonIcon from '../Icons/PersonIcon.vue'
</script>

<template>
  <div class="relative self-start">
    <IButton size="sm" pill icon>
      <PersonIcon class="w-4 h-4" />
    </IButton>
    <IButton size="sm" color="secondary" pill icon class="absolute -left-2 -z-10 top-0">
      <PersonIcon class="w-4 h-4" />
    </IButton>
  </div>
</template>
