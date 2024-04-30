import { TodosContext } from "contexts/todos/TodosContext";
import { ITodosContextValue } from "contexts/todos/TodosContext.types";
import { FC, useState } from "react";
import { ITodo, TTodoTabs } from "types/Todo";
import { PageWrapper, TodosContent, TodosWrapper } from "./Todos.styles";
import { Stack, Typography } from "@mui/material";
import { TodosForm } from "components/TodosForm";
import { TodosList } from "components/TodosList";
import { TodosManagment } from "components/TodosManagment";

export const Todos: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const TodosContextValue: ITodosContextValue = {
    todos,
    setTodos,
  };
  const [currentTab, setCurrentTab] = useState<TTodoTabs>("all");

  return (
    <TodosContext.Provider value={TodosContextValue}>
      <PageWrapper>
        <Stack alignItems={"center"} width={"100%"}>
          <Typography fontSize={78} color={"#E9D9D8"}>
            todos
          </Typography>

          <TodosContent>
            <TodosWrapper>
              <TodosForm />

              <TodosList todos={todos} currentTab={currentTab} />
            </TodosWrapper>

            <TodosManagment tabsData={{ currentTab, setCurrentTab }} />
          </TodosContent>
        </Stack>
      </PageWrapper>
    </TodosContext.Provider>
  );
};
