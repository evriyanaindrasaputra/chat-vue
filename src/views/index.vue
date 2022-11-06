<script setup lang="ts">
import { computed, defineAsyncComponent, reactive, ref } from 'vue'
import LightningIcon from '../components/Icons/LightningIcon.vue'
import IButton from '~/components/Button/IButton.vue'
import Layout from '~/components/Layout/Layout.vue'
import QAIcon from '~/components/Icons/QAIcon.vue'
import ReaderIcon from '~/components/Icons/ReaderIcon.vue'
import Inbox from '~/components/Inbox/Inbox.vue'
import Task from '~/components/Task/Task.vue'
type MenuType = 'Task' | 'Inbox' | 'Menu'

const ContainerMenu = defineAsyncComponent(() => import('~/components/ContainerMenu/ContainerMenu.vue'))

const isClicked = ref<boolean>(false)
const isOpen = ref<boolean>(false)
const selectedMenu = ref<MenuType>('Menu')

const handleClick = () => {
  if (selectedMenu.value === 'Menu')
    isOpen.value = !isOpen.value

  selectedMenu.value = 'Menu'
  isClicked.value = !isClicked.value
}
const selectMenu = (val: MenuType) => {
  selectedMenu.value = val
}
</script>

<template>
  <Layout class="relative">
    <h1 class="text-3xl font-bold text-green-200 underline font-Lato">
      Hello world!
    </h1>
    <!-- container for floating IButton -->
    <ContainerMenu>
      <Inbox v-if="selectedMenu === 'Inbox'" />
      <Task v-if="selectedMenu === 'Task'" />
    </ContainerMenu>
    <div
      class="fixed bottom-7 bg-transparent right-5"
    >
      <!-- Element show / hide -->
      <ul
        class="relative"
      >
        <IButton
          class="absolute duration-500 transition-all ease-in-out bottom-0"
          :class="selectedMenu === 'Menu' ? 'z-10 right-0' : 'z-0 right-3'"
          icon pill
          variant="solid"
          :color="selectedMenu !== 'Menu' ? 'secondary' : 'indicator-two'"
          @click="handleClick"
        >
          <LightningIcon class="w-4 h-4" />
        </IButton>
        <li
          class="absolute duration-500 transition-all ease-in-out bottom-0"
          :class="selectedMenu === 'Task' ? 'z-10 right-0'
            : selectedMenu === 'Inbox' || (selectedMenu === 'Menu' && isOpen) ? ' right-24'
              : !isOpen && 'z-0 right-0'"
        >
          <span v-if="selectedMenu !== 'Task' || !isOpen" class="text-light mb-1 text-sm">Task</span>
          <IButton
            icon
            pill variant="light" color="indicator-two"
            @click="selectMenu('Task')"
          >
            <ReaderIcon class="w-4 h-4" />
          </IButton>
        </li>
        <li
          class="absolute duration-500 transition-all ease-in-out bottom-0"
          :class="selectedMenu === 'Inbox' ? 'z-10 right-0'
            : selectedMenu === 'Task' ? 'right-24'
              : !isOpen ? 'z-0 right-0'
                : selectedMenu === 'Menu' && 'z-0 right-48'"
        >
          <span v-if="selectedMenu !== 'Inbox' || !isOpen" class=" text-light mb-1 text-sm">Inbox</span>
          <IButton
            icon pill variant="light" color="indicator-two"
            @click="selectMenu('Inbox')"
          >
            <QAIcon class="w-4 h-4" />
          </IButton>
        </li>
      </ul>
    </div>
  </Layout>
</template>

