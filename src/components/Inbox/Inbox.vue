<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue'
import Discuss from '~/components/Discuss/Discuss.vue'
import DiscussionHeader from '~/components/DiscussionHeader/DiscussionHeader.vue'
import ContainerBox from '~/components/ContainerBox/ContainerBox.vue'
import Typebar from '~/components/Typebar/Typebar.vue'
import MessageList from '~/components/Message/MessageList.vue'
import Search from '~/components/Search/Search.vue'
import Loading from '~/components/Loading/Loading.vue'

interface DiscussType {
  isDiscuss: boolean
  id: number
}
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

const isLoading = ref<boolean>(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = !isLoading.value
  }, 1000)
})
</script>

<template>
  <div class="flex flex-col max-h-full">
    <template v-if="discuss.isDiscuss">
      <DiscussionHeader @backDiscuss="closeDiscuss" />
    </template>
    <template v-else>
      <Search />
    </template>
    <ContainerBox>
      <template v-if="isLoading">
        <Loading text="Loading Chats ..." />
      </template>
      <template v-else>
        <template v-if="discuss.isDiscuss">
          <MessageList />
        </template>
        <template v-else>
          <Discuss :id="1" @changeDiscuss="selectedDiscuss" />
          <Discuss :id="2" @changeDiscuss="selectedDiscuss" />
          <Discuss :id="3" @changeDiscuss="selectedDiscuss" />
          <Discuss :id="4" @changeDiscuss="selectedDiscuss" />
          <Discuss :id="5" @changeDiscuss="selectedDiscuss" />
        </template>
      </template>
    </ContainerBox>
    <Typebar v-if="discuss.isDiscuss" />
  </div>
</template>
