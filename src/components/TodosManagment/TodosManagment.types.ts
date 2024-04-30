import { TTodoTabs } from "../../types/Todo";

export interface ITodosManagmentProps {
  tabsData: ITabsData;
}

export interface ITabsData {
  currentTab: TTodoTabs;
  setCurrentTab: (value: TTodoTabs) => void;
}

export const todosTabs: ITodoTab[] = [
  { id: "all", label: "All" },
  { id: "active", label: "Active" },
  { id: "completed", label: "Completed" },
];

export interface ITodoTab {
  id: TTodoTabs;
  label: string;
}
