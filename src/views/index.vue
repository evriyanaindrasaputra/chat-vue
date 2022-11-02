<script setup lang="ts">
import { ref } from 'vue'
import LightningIcon from '../components/Icons/LightningIcon.vue'
import IButton from '~/components/Button/IButton.vue'
import Layout from '~/components/Layout/Layout.vue'
import QAIcon from '~/components/Icons/QAIcon.vue'
import ReaderIcon from '~/components/Icons/ReaderIcon.vue'

const isClicked = ref<boolean>(false)

const handleClick = () => {
  isClicked.value = !isClicked.value
}
</script>

<template>
  <Layout>
    <h1 class="text-3xl font-bold text-green-200 underline font-Lato">
      Hello world! wqw asds ssss asdsd sassss
    </h1>
    <!-- container for floating IButton -->
    <div
      class="fixed bottom-7 bg-red-500 right-5 flex flex-row-reverse items-center"
    >
      <IButton
        class="ml-2"
        icon pill variant="solid" color="primary"
        @click="handleClick"
      >
        <LightningIcon class="w-4 h-4" />
      </IButton>
      <!-- Element show / hide -->
      <ul
        class="relative space-x-2 "
        :class="[isClicked ? 'flex' : 'hidden']"
      >
        <li>
          <IButton
            :class="[isClicked ? 'animate-come-in' : '']" icon pill variant="light" color="indicator-two"
          >
            <QAIcon class="w-4 h-4" />
          </IButton>
        </li>
        <li>
          <IButton
            :class="[isClicked ? 'animate-come-in' : '']" icon pill variant="light" color="indicator-two"
          >
            <ReaderIcon class="w-4 h-4" />
          </IButton>
        </li>
      </ul>
    </div>
    <!-- <IButton class="absolute bottom-7 right-5" icon pill variant="solid" color="primary">
      <AddIcon class="w-5 h-5" />
    </IButton> -->
    <IButton icon pill variant="light" color="indicator-two">
      <AddIcon class="w-5 h-5" />
    </IButton>
  </Layout>
</template>

