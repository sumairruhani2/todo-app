import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MainPage from '../MainPage';

let asFragment;

beforeEach(() => {
  ({ asFragment } = render(<MainPage />));
});

describe('MainPage', () => {
  describe('Unit tests', () => {
    test('renders Add Todo button', () => {
      const addButton = screen.getByRole('button', { name: /Add New Todo/i });
      expect(addButton).toBeInTheDocument();
    });

    test('renders Delete Todo button', () => {
      const deleteButton = screen.getByRole('button', {
        name: /Delete All Todos/i,
      });
      expect(deleteButton).toBeInTheDocument();
    });

    test('renders New Todo input field', () => {
      const inputField = screen.getByLabelText(/New Todo/i);
      expect(inputField).toBeInTheDocument();
    });

    test('renders correct title', () => {
      const titleElement = screen.queryByTestId('main-page-title'); // Add a data-testid
      expect(titleElement).toBeInTheDocument();
      expect(titleElement).toHaveStyle({ fontSize: '50px' });
    });

    test('matches snapshot', () => {
      expect(asFragment()).toMatchSnapshot();
    });
  });
  describe('Integration tests', () => {
    describe('Add todo items', () => {
      test('Can add a new todo Item', () => {
        expect(screen.queryByText('test input')).not.toBeInTheDocument();

        fireEvent.change(screen.getByLabelText(/New Todo/i), {
          target: { value: 'test input' },
        });

        const addButton = screen.getByRole('button', { name: /Add New Todo/i });

        fireEvent.click(addButton);

        expect(screen.queryByText('test input')).toBeInTheDocument();
      });

      test('Can add a new todo Item and mark it as completed', () => {
        expect(screen.queryByText('test input')).not.toBeInTheDocument();

        fireEvent.change(screen.getByLabelText(/New Todo/i), {
          target: { value: 'test input' },
        });

        const addButton = screen.getByRole('button', { name: /Add New Todo/i });

        fireEvent.click(addButton);

        expect(screen.queryByText('test input')).toBeInTheDocument();

        const doneIconButton = screen.getByTestId('done-icon-button');

        fireEvent.click(doneIconButton);

        expect(screen.queryByText('test input')).toBeInTheDocument();
        expect(screen.queryByText('test input')).toHaveStyle(
          'text-decoration: line-through'
        );
      });

      test('Can add a new todo Item and delete it', () => {
        expect(screen.queryByText('test input')).not.toBeInTheDocument();

        fireEvent.change(screen.getByLabelText(/New Todo/i), {
          target: { value: 'test input' },
        });

        const addButton = screen.getByRole('button', { name: /Add New Todo/i });

        fireEvent.click(addButton);

        expect(screen.queryByText('test input')).toBeInTheDocument();

        const deleteIconButton = screen.getByTestId('delete-icon-button');

        fireEvent.click(deleteIconButton);

        expect(screen.queryByText('test input')).not.toBeInTheDocument();
      });
    });

    describe('Delete Todo Items', () => {
      test('Can delete a completed todo item', () => {
        expect(screen.queryByText('test input')).not.toBeInTheDocument();

        fireEvent.change(screen.getByLabelText(/New Todo/i), {
          target: { value: 'test input' },
        });

        const addButton = screen.getByRole('button', { name: /Add New Todo/i });

        fireEvent.click(addButton);

        expect(screen.queryByText('test input')).toBeInTheDocument();

        const doneIconButton = screen.getByTestId('done-icon-button');

        fireEvent.click(doneIconButton);

        expect(screen.queryByText('test input')).toBeInTheDocument();
        expect(screen.queryByText('test input')).toHaveStyle(
          'text-decoration: line-through'
        );

        const deleteIconButton = screen.getByTestId('delete-icon-button');

        fireEvent.click(deleteIconButton);

        expect(screen.queryByText('test input')).not.toBeInTheDocument();
      });

      test('Can add multiple todo Items and delete all of them in one go', () => {
        expect(screen.queryByText('test input')).not.toBeInTheDocument();
        expect(screen.queryByText('test input 2')).not.toBeInTheDocument();

        fireEvent.change(screen.getByLabelText(/New Todo/i), {
          target: { value: 'test input' },
        });

        const addButton = screen.getByRole('button', { name: /Add New Todo/i });

        fireEvent.click(addButton);

        fireEvent.change(screen.getByLabelText(/New Todo/i), {
          target: { value: 'test input 2' },
        });

        fireEvent.click(addButton);

        expect(screen.queryByText('test input')).toBeInTheDocument();
        expect(screen.queryByText('test input 2')).toBeInTheDocument();

        const deleteTodosButton = screen.getByRole('button', {
          name: /Delete All Todos/i,
        });

        fireEvent.click(deleteTodosButton);

        expect(screen.queryByText('test input')).not.toBeInTheDocument();
        expect(screen.queryByText('test input 2')).not.toBeInTheDocument();
      });

      test('Can add multiple todo Items, complete them, and delete them in one go', () => {
        expect(screen.queryByText('test input')).not.toBeInTheDocument();
        expect(screen.queryByText('test input 2')).not.toBeInTheDocument();

        fireEvent.change(screen.getByLabelText(/New Todo/i), {
          target: { value: 'test input' },
        });

        const addButton = screen.getByRole('button', { name: /Add New Todo/i });

        fireEvent.click(addButton);

        fireEvent.change(screen.getByLabelText(/New Todo/i), {
          target: { value: 'test input 2' },
        });

        fireEvent.click(addButton);

        expect(screen.queryByText('test input')).toBeInTheDocument();
        expect(screen.queryByText('test input 2')).toBeInTheDocument();

        const doneIconButtons = screen.getAllByTestId('done-icon-button');

        fireEvent.click(doneIconButtons[0]);
        fireEvent.click(doneIconButtons[1]);

        expect(screen.queryByText('test input')).toHaveStyle(
          'text-decoration: line-through'
        );
        expect(screen.queryByText('test input 2')).toHaveStyle(
          'text-decoration: line-through'
        );

        const deleteTodosButton = screen.getByRole('button', {
          name: /Delete All Todos/i,
        });

        fireEvent.click(deleteTodosButton);

        expect(screen.queryByText('test input')).not.toBeInTheDocument();
        expect(screen.queryByText('test input 2')).not.toBeInTheDocument();
      });
    });

    describe('Edit Todo Items', () => {
      test('Can add a new todo item and close the edit modal without saving', () => {
        expect(screen.queryByText('test input')).not.toBeInTheDocument();

        fireEvent.change(screen.getByLabelText(/New Todo/i), {
          target: { value: 'test input' },
        });

        const addButton = screen.getByRole('button', {
          name: /Add New Todo/i,
        });

        fireEvent.click(addButton);

        const editButton = screen.getByTestId('edit-icon-button');

        fireEvent.click(editButton);

        expect(screen.getByText('Edit Todo Item')).toBeInTheDocument();

        const editForm = screen.getByTestId('edit-todo');

        fireEvent.change(editForm, {
          target: { value: 'test input edited' },
        });

        fireEvent.click(screen.getByRole('button', { name: /close/i }));

        expect(screen.queryByText('test input edited')).not.toBeInTheDocument();
        expect(screen.getByText('test input')).toBeInTheDocument();
      });
      test('Can add a new todo item, edit its name and save it', () => {
        expect(screen.queryByText('test input')).not.toBeInTheDocument();

        fireEvent.change(screen.getByLabelText(/New Todo/i), {
          target: { value: 'test input' },
        });

        const addButton = screen.getByRole('button', {
          name: /Add New Todo/i,
        });

        fireEvent.click(addButton);

        const editButton = screen.getByTestId('edit-icon-button');

        fireEvent.click(editButton);

        expect(screen.getByText('Edit Todo Item')).toBeInTheDocument();

        const editForm = screen.getByTestId('edit-todo');

        fireEvent.change(editForm, {
          target: { value: 'test input edited' },
        });

        const editTodoButton = screen.getByRole('button', {
          name: /Edit Todo/i,
        });

        fireEvent.click(editTodoButton);

        expect(screen.getByText('test input edited')).toBeInTheDocument();
      });
    });
  });
});
