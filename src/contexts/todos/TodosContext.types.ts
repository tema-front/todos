import { ITodo } from "../../types/Todo";

export interface ITodosContextValue {
  todos: ITodo[];
  setTodos: (data: ITodo[] | ((prev: ITodo[]) => ITodo[])) => void;
}
