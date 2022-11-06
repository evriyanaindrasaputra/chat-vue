<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ContainerBox from '../ContainerBox/ContainerBox.vue'
import TaskHeader from './TaskHeader.vue'
import TaskList from './TaskList.vue'
import Loading from '~/components/Loading/Loading.vue'

const isLoading = ref<boolean>(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = !isLoading.value
  }, 1000)
})
</script>

<template>
  <div class="flex flex-col max-h-full">
    <TaskHeader />
    <ContainerBox>
      <template v-if="isLoading">
        <Loading text="Loading Task List " />
      </template>
      <template v-else>
        <TaskList />
      </template>
    </ContainerBox>
  </div>
</template>
