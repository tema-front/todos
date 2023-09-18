import { createContext } from "react";
import { TodosContextValue } from "./TodosContext.types"

export const TodosContext = createContext<TodosContextValue | null>(null);
