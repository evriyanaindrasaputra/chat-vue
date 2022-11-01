<script setup lang="ts">
import { ref } from 'vue'
import AddIcon from './Icons/AddIcon.vue'
import ArrowBack from './Icons/ArrowBackIcon.vue'
import VectorIcon from './Icons/VectorIcon.vue'

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">
      count is {{ count }}
    </button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
    <AddIcon class="w-40 h-40 " fill="fill-red-400" />
    <ArrowBack />
    <VectorIcon />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
