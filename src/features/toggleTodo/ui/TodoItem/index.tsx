import React from "react";
import { ListItem } from "./styles";
import { useToggleTodoStore } from "@features/toggleTodo";
import { Todo } from "@entities/todo";

interface Props {
  todo: Todo;
}

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const { toggleTodo } = useToggleTodoStore();

  return (
    <ListItem>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span>{todo.text}</span>
    </ListItem>
  );
};
