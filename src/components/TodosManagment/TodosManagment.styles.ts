import styled from "styled-components"
import { Stack, Typography } from "@mui/material"

export const TodosManagmentWrapper = styled(Stack)`
  border-top: 1px solid #EDEDED; 
  padding: 8px;
`

export const ClearButton = styled.button`
  font-size: 14px;
  color: #878787;
  background-color: unset;
  border: none;

  &:hover {
    cursor: pointer;
  }
`

interface TodoTabWrapperProps {
  selected: boolean
}

export const TodoTabWrapper = styled.div<TodoTabWrapperProps>`
  padding: 0 8px;
  ${props => props.selected && `outline: 2px solid #EDEDED;`}

  &:hover {
    cursor: pointer;
  }
`