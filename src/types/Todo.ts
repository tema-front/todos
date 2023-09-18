export interface Todo {
  id: number
  text: string
  done: boolean
}

export type TodoTabs = 'all' | 'active' | 'completed'
