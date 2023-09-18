import styled from 'styled-components'

export const TodosFormWrapper = styled.form`
`

export const TodosInputWrapper = styled.div`
  position: relative;
`

export const TodosInput = styled.input`
  font-size: 22px;
  padding: 12px;
  border: none;
  outline: none;
  border-bottom: 2px solid #EDEDED; 
  color: #E3D1D0;
  width: 100%;

  &::placeholder {
    color: #D9D9D9;
    opacity: 1;
  }
`

interface SubmitButtonProps {
  submitDisabled: boolean
}

export const SubmitButton = styled.button<SubmitButtonProps>`
  display: flex;
  position: absolute;
  top: 50%;
  right: 12px;
  height: fit-content;
  transform: translate(0, -50%);
  background-color: unset;
  border: none;

  ${props => !props.submitDisabled ? `
    &:hover {
      cursor: pointer;
    }

    & svg {
      fill: #E3D1D0;
    }
  ` : `
    & svg {
      fill: #E9E9D9;
    }
  `}
`