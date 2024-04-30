export interface ITodo {
  id: number;
  text: string;
  done: boolean;
}

export type TTodoTabs = "all" | "active" | "completed";
