import styled from "styled-components"
import { Stack, Typography } from "@mui/material"

export const TodoWrapper = styled(Stack)`
  border-bottom: 1px solid #EDEDED; 
  height: 50px;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
`

export const TodoLabel = styled.label`
  border-radius: 50%;

  &:hover {
    cursor: pointer;
  }
`
export const InputCheckbox = styled.input`
  display: none;
`

export const TodoCheckbox = styled(Stack)`
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid #EDEDED;
  aspect-ratio: 1;
  width: 35px;
`

interface TodoTextProps {
  done: boolean
}

export const TodoText = styled(Typography) <TodoTextProps>`
  color: #5D5D5D;
  font-size: 22;

  ${props => props.done && `
    color: #D9D9D9;
    text-decoration: line-through;
    text-decoration-color: #D9D9D9;
  `}
`
