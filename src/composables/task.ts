import { ref } from 'vue'
import { createGlobalState } from '@vueuse/core'
import type { Bookmark, Task } from '~/type/types'

export const bookmarkList: Array<Bookmark> = [
  { label: 'Important ASAP', background: 'bg-sticker-one' },
  { label: 'Offline Meeting', background: 'bg-sticker-two' },
  { label: 'Virtual Meeting', background: 'bg-sticker-three' },
  { label: 'ASAP', background: 'bg-sticker-four' },
  { label: 'Client Related', background: 'bg-sticker-five' },
  { label: 'Self Task', background: 'bg-sticker-six' },
  { label: 'Appointments', background: 'bg-sticker-seven' },
  { label: 'Court Related', background: 'bg-[#9DD0ED]' },
]

export const useTask = createGlobalState(
  () => {
    // state
    const listTask = ref<Task[]>([
      {
        id: 1,
        done: false,
        title: 'Task Day One ',
        date: '11/06/2022',
        description: 'Homeworks needed to be checked are as follows : Client Profile Questionnaire, Passport Requirements and Images, Personal Documents.',
        bookmarks: [bookmarkList[0]],
      },
      {
        id: 2,
        done: false,
        title: 'Task Day Two ',
        date: '11/07/2022',
        description: 'Homeworks needed to be checked are as follows : Client Profile Questionnaire, Passport Requirements and Images, Personal Documents.',
        bookmarks: [bookmarkList[1]],
      },
      {
        id: 3,
        done: false,
        title: 'Task Day Three ',
        date: '11/08/2022',
        description: 'Homeworks needed to be checked are as follows : Client Profile Questionnaire, Passport Requirements and Images, Personal Documents.',
        bookmarks: [bookmarkList[2]],
      },
    ])

    // getters

    // actions
    function addNewTask() {
      listTask.value.push({
        id: listTask.value.length + 1,
        done: false,
        title: '',
        date: '',
        description: '',
        bookmarks: [],
      })
    }

    function deleteTask(id: number) {
      listTask.value = listTask.value.filter(item => item.id !== id)
    }

    return { listTask, addNewTask, deleteTask }
  },
)
