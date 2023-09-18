import { TodoTabs } from "../../types/Todo"

export interface TodosManagmentProps {
  tabsData: TabsData
}

export interface TabsData {
  currentTab: TodoTabs
  setCurrentTab: (value: TodoTabs) => void
}

export const todosTabs: TodoTab[] = [
  { id: 'all', label: 'All' },
  { id: 'active', label: 'Active' },
  { id: 'completed', label: 'Completed' },
]

export interface TodoTab {
  id: TodoTabs
  label: string
}