<script setup lang="ts">
import { computed, defineAsyncComponent, reactive, ref } from 'vue'
import LightningIcon from '../components/Icons/LightningIcon.vue'
import IButton from '~/components/Button/IButton.vue'
import Layout from '~/components/Layout/Layout.vue'
import QAIcon from '~/components/Icons/QAIcon.vue'
import ReaderIcon from '~/components/Icons/ReaderIcon.vue'
import Search from '~/components/Search/Search.vue'
import Discuss from '~/components/Discuss/Discuss.vue'
import DiscussionHeader from '~/components/DiscussionHeader/DiscussionHeader.vue'
import ContainerDiscuss from '~/components/ContainerDiscuss/ContainerDiscuss.vue'
import MoreHorizIcon from '~/components/Icons/MoreHorizIcon.vue'
import Typebar from '~/components/Typebar/Typebar.vue'

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
        <DiscussionHeader @backDiscuss="closeDiscuss" />
      </template>
      <template v-else>
        <Search />
      </template>
      <ContainerDiscuss>
        <template v-if="discuss.isDiscuss">
          <div class="space-y-2">
            <div class="w-full  ml-auto">
              <p class="text-chats-two-darken text-right">
                You
              </p>
              <div class="flex items-start flex-row-reverse gap-1">
                <div class="bg-chats-two p-4 rounded">
                  <p class=" text-gray-700 text-sm">
                    No worries. It will be completed ASAP. I’ve asked him yesterday
                  </p>
                  <span class="text-gray-700 text-xs">19:32</span>
                </div>
                <button>
                  <MoreHorizIcon class="w-4 h-4 " fill="fill-black" />
                </button>
              </div>
            </div>
            <div class="w-full flex justify-between space-x-3 items-center">
              <div class="w-full h-[2px] rounded bg-black" />
              <div class=" flex-shrink-0 text-sm">
                Today June 09, 2021
              </div>
              <div class="w-full h-[2px] rounded bg-black" />
            </div>
            <div class="w-full">
              <span class="text-chats-two-darken">You</span>
              <div class="flex items-start gap-1">
                <div class="bg-chats-two p-4 rounded">
                  <p class=" text-gray-700 text-sm">
                    No worries. It will be completed ASAP. I’ve asked him yesterday
                  </p>
                  <span class="text-gray-700 text-xs">19:32</span>
                </div>
                <button>
                  <MoreHorizIcon class="w-4 h-4 " fill="fill-black" />
                </button>
              </div>
            </div>
          </div>
          <div class="space-y-2">
            <div class="w-full  ml-auto">
              <p class="text-chats-two-darken text-right">
                You
              </p>
              <div class="flex items-start flex-row-reverse gap-1">
                <div class="bg-chats-two p-4 rounded">
                  <p class=" text-gray-700 text-sm">
                    No worries. It will be completed ASAP. I’ve asked him yesterday
                  </p>
                  <span class="text-gray-700 text-xs">19:32</span>
                </div>
                <button>
                  <MoreHorizIcon class="w-4 h-4 " fill="fill-black" />
                </button>
              </div>
            </div>
            <div class="w-full flex justify-between space-x-3 items-center">
              <div class="w-full h-[2px] rounded bg-black" />
              <div class=" flex-shrink-0 text-sm">
                Today June 09, 2021
              </div>
              <div class="w-full h-[2px] rounded bg-black" />
            </div>
            <div class="w-full">
              <span class="text-chats-two-darken">You</span>
              <div class="flex items-start gap-1">
                <div class="bg-chats-two p-4 rounded">
                  <p class=" text-gray-700 text-sm">
                    No worries. It will be completed ASAP. I’ve asked him yesterday
                  </p>
                  <span class="text-gray-700 text-xs">19:32</span>
                </div>
                <button>
                  <MoreHorizIcon class="w-4 h-4 " fill="fill-black" />
                </button>
              </div>
            </div>
          </div>
          <div class="space-y-2">
            <div class="w-full  ml-auto">
              <p class="text-chats-two-darken text-right">
                You
              </p>
              <div class="flex items-start flex-row-reverse gap-1">
                <div class="bg-chats-two p-4 rounded">
                  <p class=" text-gray-700 text-sm">
                    No worries. It will be completed ASAP. I’ve asked him yesterday
                  </p>
                  <span class="text-gray-700 text-xs">19:32</span>
                </div>
                <button>
                  <MoreHorizIcon class="w-4 h-4 " fill="fill-black" />
                </button>
              </div>
            </div>
            <div class="w-full flex justify-between space-x-3 items-center">
              <div class="w-full h-[2px] rounded bg-black" />
              <div class=" flex-shrink-0 text-sm">
                Today June 09, 2021
              </div>
              <div class="w-full h-[2px] rounded bg-black" />
            </div>
            <div class="w-full">
              <span class="text-chats-two-darken">You</span>
              <div class="flex items-start gap-1">
                <div class="bg-chats-two p-4 rounded">
                  <p class=" text-gray-700 text-sm">
                    No worries. It will be completed ASAP. I’ve asked him yesterday
                  </p>
                  <span class="text-gray-700 text-xs">19:32</span>
                </div>
                <button>
                  <MoreHorizIcon class="w-4 h-4 " fill="fill-black" />
                </button>
              </div>
            </div>
          </div>
        </template>
        <template v-else>
          <Discuss :id="1" @changeDiscuss="selectedDiscuss" />
          <Discuss :id="2" @changeDiscuss="selectedDiscuss" />
          <Discuss :id="3" @changeDiscuss="selectedDiscuss" />
          <Discuss :id="4" @changeDiscuss="selectedDiscuss" />
          <Discuss :id="5" @changeDiscuss="selectedDiscuss" />
        </template>
      </ContainerDiscuss>
      <Typebar v-if="discuss.isDiscuss" />
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

