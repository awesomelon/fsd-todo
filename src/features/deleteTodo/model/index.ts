import { useTodoStore as useGlobalTodoStore } from "@/entities/todo";

export const useDeleteTodoStore = () => {
  const { deleteTodo } = useGlobalTodoStore();
  return { deleteTodo };
};
