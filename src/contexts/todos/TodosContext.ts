import { createContext } from "react";
import { ITodosContextValue } from "./TodosContext.types";

export const TodosContext = createContext<ITodosContextValue | null>(null);
