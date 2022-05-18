import TodoItem from "@/models/TodoItem";

export default interface TodoList {
  id: number;
  name: string;
  todoItem: TodoItem[];
}
