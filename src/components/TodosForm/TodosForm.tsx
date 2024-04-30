import { Add as AddIcon } from "@mui/icons-material";
import { FC, useContext, useEffect, useRef, useState } from "react";
import { TodosFormProps } from "./TodosForm.types";
import { ITodosContextValue } from "contexts/todos/TodosContext.types";
import { TodosContext } from "contexts/todos/TodosContext";
import { ITodo } from "types/Todo";
import {
  SubmitButton,
  TodosFormWrapper,
  TodosInput,
  TodosInputWrapper,
} from "./TodosForm.styles";

export const TodosForm: FC<TodosFormProps> = () => {
  const [newTodoValue, setNewTodoValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const { setTodos } =
    useContext<ITodosContextValue | null>(TodosContext) || {};
  const isInputEmpty: boolean = !Boolean(newTodoValue.trim());

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isInputEmpty) return;

    const newTodo: ITodo = {
      id: Date.now(),
      text: newTodoValue,
      done: false,
    };
    setTodos && setTodos((prev: ITodo[]) => [newTodo, ...prev]);
    setNewTodoValue("");
  };

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoValue(e.target.value);
  };

  return (
    <TodosFormWrapper onSubmit={submitForm} data-testid="todoForm">
      <TodosInputWrapper>
        <TodosInput
          placeholder="What needs to be done?"
          onChange={changeValue}
          value={newTodoValue}
          ref={inputRef}
          data-testid="todoInput"
        />
        <SubmitButton submitDisabled={isInputEmpty} data-testid="submitButton">
          <AddIcon />
        </SubmitButton>
      </TodosInputWrapper>
    </TodosFormWrapper>
  );
};
