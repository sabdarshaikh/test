import React from 'react';
import Todo from './Todo';

interface TodoListProps {
  todos: { id: number; text: string }[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} id={todo.id} text={todo.text} />
      ))}
    </div>
  );
};

export default TodoList;
