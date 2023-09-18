import { render, screen } from '@testing-library/react';
import { TodosForm } from './components/TodosForm';
import { Todo } from './components/Todo';
import { TodosManagment } from './components/TodosManagment';

describe('Renders', () => {
  test('input', () => {
    render(<TodosForm />)
    const input = screen.getByTestId('todoInput')
    expect(input).toBeInTheDocument();
  })

  test('todo', () => {
    render(<Todo todo={{ id: 1, text: 'Clean the kitchen', done: false }} />)
    const todo = screen.getByTestId('todo')
    expect(todo).toBeInTheDocument();
  })

  test('button', () => {
    render(<TodosForm />)
    const submitButton = screen.getByTestId('submitButton')
    expect(submitButton).toBeInTheDocument();
  })

  test('counter', () => {
    render(<TodosManagment tabsData={{ currentTab: 'all', setCurrentTab: () => { } }} />)
    const counter = screen.getByTestId('counter')
    expect(counter).toBeInTheDocument();
  })

  test('tabs', () => {
    render(<TodosManagment tabsData={{ currentTab: 'all', setCurrentTab: () => { } }} />)
    const tabs = screen.getByTestId('tabs')
    expect(tabs).toBeInTheDocument();
  })

  test('clearButton', () => {
    render(<TodosManagment tabsData={{ currentTab: 'all', setCurrentTab: () => { } }} />)
    const clearButton = screen.getByTestId('clearButton')
    expect(clearButton).toBeInTheDocument();
  })
})
