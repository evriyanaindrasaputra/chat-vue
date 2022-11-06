<script setup lang="ts">
import TaskItem from '../TaskItem/TaskItem.vue'
import { useTask } from '~/composables/task'
const { listTask } = useTask()
</script>

<template>
  <div class=" space-y-2 divide-y divide-gray-400 flex-1 flex flex-col w-full">
    <template v-for="task in listTask" :key="task.id">
      <TaskItem :task-item="task" />
    </template>
    <div id="list-task" />
  </div>
</template>
