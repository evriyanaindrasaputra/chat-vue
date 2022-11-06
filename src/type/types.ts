export interface Task {
  id: number
  done: boolean
  title: string
  date: string
  description: string
  bookmarks: Array<Bookmark>
}

export interface Bookmark {
  label: string
  background: string
}
