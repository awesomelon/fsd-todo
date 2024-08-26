import React from "react";

import { Button } from "./styles";

import { useDeleteTodoStore } from "@features/deleteTodo";

interface Props {
  todoId: string;
}

export const DeleteButton: React.FC<Props> = ({ todoId }) => {
  const { deleteTodo } = useDeleteTodoStore();

  return <Button onClick={() => deleteTodo(todoId)}>삭제</Button>;
};
