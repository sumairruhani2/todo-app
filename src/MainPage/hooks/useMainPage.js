import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const useMainPage = () => {
  const [todos, setTodos] = useState([]);

  // Marks a todo item as completed or incomplete
  const checkTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  };

  // Deletes a todo item from the list
  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Deletes all todo items in the list
  const deleteAllTodos = () => {
    setTodos([]);
  };

  // Adds a new todo item from the list
  const addTodo = (text) => {
    if (text.length > 0) {
      const newTodo = {
        id: uuidv4(),
        title: text,
        isCompleted: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  // Edits a todo item title in the list
  const editTodo = (id, editedTitle) => {
    if (editedTitle.length > 0) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, title: editedTitle } : todo
        )
      );
    }
  };

  return {
    todos,
    checkTodo,
    deleteTodo,
    addTodo,
    editTodo,
    deleteAllTodos,
  };
};

export default useMainPage;
