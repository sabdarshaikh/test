import React, { useState, ChangeEvent, FormEvent } from 'react';

type TodoFormProps = {
  todoListId: number;
  handleAddTodo: (todoListId: number, todoText: string) => void;
};

const TodoForm: React.FC<TodoFormProps> = ({ todoListId, handleAddTodo }) => {
  const [todoText, setTodoText] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    handleAddTodo(todoListId, todoText);
    setTodoText('');
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={todoText}
        onChange={handleChange}
        placeholder="Enter todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
