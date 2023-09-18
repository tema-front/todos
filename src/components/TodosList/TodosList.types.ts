import { Todo, TodoTabs } from "../../types/Todo";

export interface TodosListProps {
  todos: Todo[]
  currentTab: TodoTabs
}