import { Link } from 'react-router-dom';
import { useFetchTodosQuery } from 'redux/todos/todoSlice';
import { TodoList } from 'components/TodoList/TodoList';
import { Spinner } from 'components/Spinner/Spinner';

export const TodosPage = () => {
  const { data: todos, isFetching } = useFetchTodosQuery();

  return (
    <div>
      <Link to="/todos/create">Create todo</Link>
      {isFetching && <Spinner />}
      {todos && <TodoList todos={todos} />}
    </div>
  );
};
