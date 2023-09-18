import { FC, useContext, useEffect, useRef, useState } from "react";
import { TodosFormProps } from "./TodosForm.types";
import { TodosContextValue } from "../../contexts/todos/TodosContext.types";
import { TodosContext } from "../../contexts/todos/TodosContext";
import { Todo } from "../../types/Todo";
import { TodosFormWrapper, SubmitButton, TodosInput, TodosInputWrapper } from "./TodosForm.styles";
import AddIcon from '@mui/icons-material/Add';

export const TodosForm: FC<TodosFormProps> = () => {
  const [newTodoValue, setNewTodoValue] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const { setTodos } = useContext<TodosContextValue | null>(TodosContext) || {}
  const isInputEmpty: boolean = !Boolean(newTodoValue.trim())

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (isInputEmpty) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: newTodoValue,
      done: false
    }
    setTodos((prev: Todo[]) => [newTodo, ...prev])
    setNewTodoValue('')
  }

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoValue(e.target.value)
  }


  return (
    <TodosFormWrapper onSubmit={submitForm} data-testid='todoForm'>
      <TodosInputWrapper>
        <TodosInput
          placeholder='What needs to be done?'
          onChange={changeValue}
          value={newTodoValue}
          ref={inputRef}
          data-testid='todoInput'
        />
        <SubmitButton submitDisabled={isInputEmpty} data-testid='submitButton'>
          <AddIcon />
        </SubmitButton>
      </TodosInputWrapper>
    </TodosFormWrapper>
  )
}