import { useTodoStore as useGlobalTodoStore } from "@/entities/todo";

export const useToggleTodoStore = () => {
  const { toggleTodo } = useGlobalTodoStore();
  return { toggleTodo };
};
