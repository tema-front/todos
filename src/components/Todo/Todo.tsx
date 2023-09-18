import { FC, useContext } from "react"
import { TodoProps } from "./Todo.types"
import { InputCheckbox, TodoCheckbox, TodoLabel, TodoText, TodoWrapper } from "./Todo.styles"
import DoneIcon from '@mui/icons-material/Done';
import { TodosContext } from "../../contexts/todos/TodosContext";
import { TodosContextValue } from "../../contexts/todos/TodosContext.types";

export const Todo: FC<TodoProps> = ({ todo }) => {
  const labelId = String(todo.id)
  const { todos, setTodos } = useContext<TodosContextValue | null>(TodosContext) || {}

  const changeTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const localTodos = [...todos || []]
    const todoIndex = localTodos.findIndex(item => item.id === todo.id)
    const localTodo = localTodos[todoIndex]
    localTodo.done = !localTodo.done

    setTodos(localTodos)
  }

  return (
    <TodoWrapper direction={'row'} spacing={2} data-testid='todo'>
      <TodoLabel htmlFor={labelId}>
        <InputCheckbox onChange={changeTodo} checked={todo.done} id={labelId} type='checkbox' />

        <TodoCheckbox>
          {todo.done && <DoneIcon color='success' />}
        </TodoCheckbox>
      </TodoLabel>

      <TodoText done={todo.done}>
        {todo.text}
      </TodoText>
    </TodoWrapper>
  )
}