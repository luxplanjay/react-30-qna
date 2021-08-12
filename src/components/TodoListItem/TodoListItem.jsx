import { useDeleteTodoMutation } from 'redux/todos/todoSlice';
import { Spinner } from 'components/Spinner/Spinner';

export const TodoListItem = ({ id, content }) => {
  const [deleteTodo, { isLoading: isDeleting }] = useDeleteTodoMutation();

  return (
    <li>
      {content}{' '}
      <button onClick={() => deleteTodo(id)} disabled={isDeleting}>
        {isDeleting && <Spinner size={12} />}
        Delete
      </button>
    </li>
  );
};
