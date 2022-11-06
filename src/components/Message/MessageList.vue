<script setup lang="ts">
import Message from '~/components/Message/Message.vue'
import MessageDate from '~/components/Message/MessageDate.vue'
import NewMessage from '~/components/Message/NewMessage.vue'
</script>

<template>
  <div class="space-y-2 flex flex-col w-full">
    <Message
      :own-user="true"
      message="No worries. It will be completed ASAP. I’ve asked him yesterday"
      datetime="01/05/2021 19:10"
    />
    <MessageDate />
    <Message
      :own-user="false"
      user-name="other"
      message="hallo"
      datetime="01/05/2021 19:20"
    />
    <Message
      :own-user="false"
      user-name="other"
      message="hallo"
      datetime="01/05/2021 19:20"
    />
    <Message
      :own-user="false"
      user-name="other"
      message="hallo"
      datetime="01/05/2021 19:20"
    />
    <Message
      :own-user="false"
      user-name="other"
      message="hallo"
      datetime="01/05/2021 19:20"
    />
    <MessageDate />
    <Message
      :own-user="false"
      user-name="other"
      message="hallo"
      datetime="01/05/2021 19:20"
    />
    <NewMessage />
  </div>
</template>
