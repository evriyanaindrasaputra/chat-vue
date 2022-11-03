<script setup lang="ts">
import { computed, defineAsyncComponent, reactive, ref } from 'vue'
import LightningIcon from '../components/Icons/LightningIcon.vue'
import IButton from '~/components/Button/IButton.vue'
import Layout from '~/components/Layout/Layout.vue'
import QAIcon from '~/components/Icons/QAIcon.vue'
import ReaderIcon from '~/components/Icons/ReaderIcon.vue'
import Search from '~/components/Search/Search.vue'
import Discuss from '~/components/Discuss/Discuss.vue'
import ContainerDiscuss from '~/components/ContainerDiscuss/ContainerDiscuss.vue'

type MenuType = 'Task' | 'Inbox' | 'Menu'
interface DiscussType {
  isDiscuss: boolean
  id: number
}

const menuIcon = {
  Task: ReaderIcon,
  Inbox: QAIcon,
  Menu: LightningIcon,
}

const ContainerMenu = defineAsyncComponent(() => import('~/components/ContainerMenu/ContainerMenu.vue'))

const isClicked = ref<boolean>(false)
const selectedMenu = ref<MenuType>('Menu')

const handleClick = () => {
  selectedMenu.value = 'Menu'
  isClicked.value = !isClicked.value
}
const selectMenu = (val: MenuType) => {
  selectedMenu.value = val
}

const selectedIcon = computed(() => {
  return menuIcon[selectedMenu.value]
})

const discuss = reactive<DiscussType>({
  id: 0,
  isDiscuss: false,
})

const selectedDiscuss = (id: number) => {
  discuss.id = id
  discuss.isDiscuss = true
}
const closeDiscuss = () => {
  discuss.id = 0
  discuss.isDiscuss = false
}
</script>

<template>
  <Layout class="relative">
    <h1 class="text-3xl font-bold text-green-200 underline font-Lato">
      Hello world!
    </h1>
    <!-- container for floating IButton -->
    <ContainerMenu>
      <template v-if="discuss.isDiscuss">
        <button @click="closeDiscuss">
          x
        </button>
      </template>
      <template v-else>
        <Search />
      </template>
      <ContainerDiscuss>
        <template v-if="discuss.isDiscuss">
          <Discuss :id="1" @changeDiscuss="selectedDiscuss" />
        </template>
        <template v-else>
          <Discuss :id="1" @changeDiscuss="selectedDiscuss" />
          <Discuss :id="2" @changeDiscuss="selectedDiscuss" />
          <Discuss :id="3" @changeDiscuss="selectedDiscuss" />
          <Discuss :id="4" @changeDiscuss="selectedDiscuss" />
          <Discuss :id="5" @changeDiscuss="selectedDiscuss" />
        </template>
      </ContainerDiscuss>
    </ContainerMenu>
    <div
      class="fixed bottom-7 bg-transparent right-5 flex flex-row-reverse items-end"
    >
      <IButton
        class="ml-2"
        icon pill
        variant="solid"
        color="indicator-two"
        @click="handleClick"
      >
        <component
          :is="selectedIcon" class="w-4 h-4"
        />
      </IButton>
      <!-- Element show / hide -->
      <ul
        class="relative space-x-2 "
        :class="[isClicked ? 'flex' : 'hidden']"
      >
        <li
          v-if="selectedMenu !== 'Task'"
          class="flex flex-col items-center"
          :class="[isClicked ? 'animate-come-in' : '']"
        >
          <span class="text-light mb-1 text-sm">Task</span>
          <IButton
            icon
            pill variant="light" color="indicator-two"
            @click="selectMenu('Task')"
          >
            <ReaderIcon class="w-4 h-4" />
          </IButton>
        </li>
        <li
          v-if="selectedMenu !== 'Inbox'"
          class="flex flex-col items-center"
          :class="[isClicked ? 'animate-come-in' : '']"
        >
          <span class=" text-light mb-1 text-sm">Inbox</span>
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

