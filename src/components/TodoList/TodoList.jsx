import { TodoListItem } from '../TodoListItem/TodoListItem';

export const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};
