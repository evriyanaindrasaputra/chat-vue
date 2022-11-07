<script setup lang="ts">
import AvatarGroup from '../Avatar/AvatarGroup.vue'

const props = defineProps<{
  id: number
}>()

// emit discuss id to parent
const emit = defineEmits(['changeDiscuss'])

const handleDiscuss = () => { emit('changeDiscuss', props.id) }
</script>

<template>
  <div class="flex py-[22px] space-x-[17px]">
    <!-- avatar -->
    <AvatarGroup />
    <!-- description -->
    <div class="w-full">
      <!-- header -->
      <div class="flex font-semibold text-base leading-tight items-start">
        <span
          :id="id.toString"
          class=" text-primary-one mr-1 cursor-pointer"
          @click="handleDiscuss"
        >
          Jeannette Moraima Guaman Chamba (Hutto I-589) [ Hutto Follow Up - Brief Service ]
        </span>
        <span class="flex-shrink-0 font-normal text-gray-500">02/06/2021 10:45</span>
      </div>
      <!-- sender -->
      <p class="font-semibold text-sm">
        Cameron Phillips :
      </p>
      <!-- message -->
      <span class="text-gray-700 text-sm">Please check this out!</span>
    </div>
  </div>
</template>
