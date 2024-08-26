import { useTodoStore as useGlobalTodoStore } from "@/entities/todo";

export const useAddTodoStore = () => {
  const { addTodo } = useGlobalTodoStore();
  return { addTodo };
};
