import React from 'react';

interface TodoProps {
  id: number;
  text: string;
}

const Todo: React.FC<TodoProps> = ({ id, text }) => {
  return (
    <div>
      <input type="checkbox" id={`todo-${id}`} />
      <label htmlFor={`todo-${id}`}>{text}</label>
    </div>
  );
};

export default Todo;
