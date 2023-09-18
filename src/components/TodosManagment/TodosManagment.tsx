import { FC, useContext, useMemo } from "react"
import { Stack, Typography } from "@mui/material";
import { ClearButton, TodoTabWrapper, TodosManagmentWrapper } from "./TodosManagment.styles";
import { TodosContextValue } from "../../contexts/todos/TodosContext.types";
import { TodosContext } from "../../contexts/todos/TodosContext";
import { TodosManagmentProps, todosTabs } from "./TodosManagment.types";
import { TodoTabs } from "../../types/Todo";

export const TodosManagment: FC<TodosManagmentProps> = ({ tabsData }) => {
  const { currentTab, setCurrentTab } = tabsData
  const { todos, setTodos } = useContext<TodosContextValue | null>(TodosContext) || {}

  const onClearCompleted = () => {
    const completedTodos = [...todos || []].filter(todo => !todo.done)

    setTodos(completedTodos)
  }

  const onChangeTab = (tabId: TodoTabs) => {
    if (currentTab === tabId) return;
    setCurrentTab(tabId)
  }

  const getRemainsToDone = useMemo((): string => {
    const doneTodos = todos?.filter(todo => !todo.done).length || 0
    return `${doneTodos} item${doneTodos !== 1 ? 's' : ''} left`
  }, [todos])

  return (
    <TodosManagmentWrapper direction={'row'} justifyContent={'space-between'} >
      <Typography fontSize={14} color={'#878787'} width={'20%'} data-testid='counter'>
        {getRemainsToDone}
      </Typography>

      <Stack direction={'row'} spacing={1} data-testid='tabs'>
        {todosTabs.map(tab => (
          <TodoTabWrapper key={tab.id} onClick={() => onChangeTab(tab.id)} selected={tab.id === currentTab}>
            <Typography fontSize={14} color={'#878787'}>
              {tab.label}
            </Typography>
          </TodoTabWrapper>
        ))}
      </Stack>

      <ClearButton onClick={onClearCompleted} data-testid='clearButton'>
        Clear completed
      </ClearButton>
    </TodosManagmentWrapper>
  )
}