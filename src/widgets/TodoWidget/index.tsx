import React from "react";
import { List, ListItem } from "./styles";
import { AddTodoForm, TodoItem, DeleteButton } from "@/features";
import { useTodoStore } from "@entities/todo";

export const TodoWidget: React.FC = () => {
  const { todos } = useTodoStore();

  return (
    <>
      <AddTodoForm />
      <List>
        {todos.map((todo) => (
          <ListItem key={todo.id}>
            <TodoItem todo={todo} />
            <DeleteButton todoId={todo.id} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
