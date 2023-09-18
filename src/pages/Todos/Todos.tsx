import { FC, useState } from "react";
import { PageWrapper, TodosWrapper, TodosContent } from "./Todos.styles";
import { Stack, Typography } from "@mui/material";
import { TodosList } from "../../components/TodosList";
import { TodosContext } from "../../contexts/todos/TodosContext";
import { TodosManagment } from "../../components/TodosManagment";
import { Todo, TodoTabs } from "../../types/Todo";
import { TodosContextValue } from "../../contexts/todos/TodosContext.types";
import { TodosForm } from "../../components/TodosForm";

export const Todos: FC = () => {
  const [todos, setTodos] = useState<Todo[]>([])
  const TodosContextValue: TodosContextValue = {
    todos,
    setTodos
  }
  const [currentTab, setCurrentTab] = useState<TodoTabs>('all')

  // написать тесты
  // удалить лишнии файлы

  return (
    <TodosContext.Provider value={TodosContextValue}>
      <PageWrapper>
        <Stack alignItems={'center'} width={'100%'}>
          <Typography fontSize={78} color={'#E9D9D8'}>
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
  )
}