<script setup lang="ts">
import { ref } from 'vue'
import { Switch } from '@headlessui/vue'
import CheckboxIcon from '../Icons/CheckboxIcon.vue'
import CheckboxOutlineIcon from '../Icons/CheckboxOutlineIcon.vue'
const { title, done, date } = defineProps({
  title: {
    type: String,
    required: true,
  },
  done: {
    type: Boolean,
    required: true,
  },
  date: {
    type: String || Date,
    required: true,
  },
})
const Title = ref(title)
const dateTodo = ref(date)
const isDone = ref(done)
const isEdit = ref<boolean>(false)

const handleEdit = () => isEdit.value = !isEdit.value
</script>

<template>
  <div class="flex gap-3  items-start">
    <div>
      <Switch v-slot="{ checked }" v-model="isDone" as="template">
        <button>
          <CheckboxIcon v-if="checked" class="w-6 h-6" fill="fill-blue-600" />
          <CheckboxOutlineIcon v-else class="w-6 h-6" fill="fill-gray-600" />
        </button>
      </Switch>
    </div>
    <div className="flex-1">
      <p
        v-if="!isEdit"
        class="text-black font-semibold"
        :class="[isDone ? 'line-through' : '']"
        @dblclick="handleEdit"
      >
        {{ Title.trim() ? Title : 'No Title' }}
      </p>
      <input
        v-else
        v-model="Title"
        type="text"
        class="rounded-[5px] border border-secondary w-full"
        placeholder="Type Task Title"
        @keyup.enter="handleEdit"
        @keyup.esc="handleEdit"
      >
    </div>
    <div class="flex-shrink-0 flex items-start gap-2 font-normal text-sm">
      <span v-if="!isDone" class=" text-indicator-three">2 Days Left</span>
      <span class=" text-gray-500">{{ dateTodo }}</span>
      <slot />
    </div>
  </div>
</template>
