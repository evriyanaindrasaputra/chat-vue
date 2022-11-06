<script lang="ts" setup>
import { ref } from 'vue'
import { PencilIcon } from '@heroicons/vue/24/outline'

const props = defineProps({
  initialDescription: {
    type: String,
    default: '',
  },
})
const isEdit = ref<boolean>(false)
const textarea = ref(null)
const handleEdit = () => isEdit.value = !isEdit.value

const description = ref(props.initialDescription)
</script>

<template>
  <div class="flex items-center gap-4">
    <PencilIcon
      class="w-5 h-5"
      :class="[description.trim() ? 'text-primary-one' : 'text-gray-600']"
    />
    <span v-if="!isEdit" class="text-black" @dblclick="handleEdit">
      {{ description.trim() ? description : 'No Description' }}
    </span>
    <textarea
      v-else
      ref="textarea"
      v-model="description"
      className="rounded-[5px] border border-secondary w-full"
      rows="4"
      @keyup.esc="handleEdit"
    />
  </div>
</template>
