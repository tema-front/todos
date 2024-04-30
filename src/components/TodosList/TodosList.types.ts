import { ITodo, TTodoTabs } from "../../types/Todo";

export interface TodosListProps {
  todos: ITodo[];
  currentTab: TTodoTabs;
}
