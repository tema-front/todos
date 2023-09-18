import { Todo, TodoTabs } from "../../types/Todo";

export interface TodosContextValue {
  todos: Todo[],
  setTodos: any,
}