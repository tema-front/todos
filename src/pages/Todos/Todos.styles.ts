import styled from 'styled-components'
import { Stack } from '@mui/material'

export const PageWrapper = styled(Stack)`
  width: 100%;
  height: 100%;
  background-color: #F5F5F5;
  align-items: center;
  justify-content: center;

`

export const TodosContent = styled(Stack)`
  background-color: #FFFFFF;
  height: 500px;
  max-width: 500px;
  width: 100%;

  box-shadow: rgba(0, 0, 0, 0.2) 0px 6px 6px -3px, rgba(0, 0, 0, 0.14) 0px 10px 14px 1px, rgba(0, 0, 0, 0.12) 0px 4px 18px 3px;
`

export const TodosWrapper = styled(Stack)`
  height: calc(100% - 38px);
`