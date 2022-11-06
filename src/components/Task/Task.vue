<script setup lang="ts">
import ContainerBox from '../ContainerBox/ContainerBox.vue'
import TaskHeader from './TaskHeader.vue'
import TaskList from './TaskList.vue'
</script>

<template>
  <div class="flex flex-col max-h-full">
    <TaskHeader />
    <ContainerBox>
      <TaskList />
    </ContainerBox>
  </div>
</template>
