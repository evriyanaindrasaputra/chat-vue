<script setup lang="ts">
import AddIcon from '../components/Icons/AddIcon.vue'
import Button from '~/components/Button/Button.vue'
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-green-200 underline font-Lato">
      Hello world! wqw asds ssss asdsd sassss
    </h1>
    <Button icon pill variant="light" color="primary">
      <AddIcon class="w-5 h-5" />
    </Button>
    <Button icon pill variant="light" color="indicator">
      <AddIcon class="w-5 h-5" />
    </Button>
    <Button icon pill variant="light" color="indicator-two">
      <AddIcon class="w-5 h-5" />
    </Button>
  </div>
</template>

