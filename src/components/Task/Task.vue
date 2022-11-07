<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ContainerBox from '../ContainerBox/ContainerBox.vue'
import TaskHeader from './TaskHeader.vue'
import TaskList from './TaskList.vue'
import Loading from '~/components/Loading/Loading.vue'
import { client } from '~/composables/fetch'

const isLoading = ref<boolean>(true)
const getData = async () => {
  try {
    await client.get('')
    isLoading.value = !isLoading.value
  }
  catch (error) {
    isLoading.value = !isLoading.value
  }
}
onMounted(() => {
  getData()
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
