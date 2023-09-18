import { FC, useMemo } from "react"
import { TodosListProps } from "./TodosList.types"
import { Stack, Typography } from "@mui/material"
import { Todo } from "../Todo"

export const TodosList: FC<TodosListProps> = ({ todos, currentTab }) => {

  const filteredByTab = useMemo(() => {

    switch (currentTab) {
      case 'active':
        return todos.filter(todo => !todo.done)
      case 'completed':
        return todos.filter(todo => todo.done)
      default:
        return todos
    }

  }, [todos, currentTab])

  return (
    <Stack height={'100%'} overflow={'auto'}>
      {filteredByTab.length
        ? (
          <Stack>
            {filteredByTab.map(todo => <Todo key={todo.id} todo={todo} />)}
          </Stack>
        )
        : (
          <Stack alignItems={'center'} justifyContent={'center'} height={'100%'}>
            <Typography color={'#E9D9D8'} fontSize={28}>
              There are no Todos here
            </Typography>
          </Stack>
        )
      }
    </Stack>
  )
}