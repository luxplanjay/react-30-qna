import { useSelector, useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import { HiTrash } from 'react-icons/hi';
import { addUser, deleteUser, usersSelector } from 'redux/users/usersSlice';

export const UsersPage = () => {
  const users = useSelector(usersSelector);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(
      addUser({
        id: nanoid(),
        name: e.currentTarget.elements.username.value,
      })
    );
    e.currentTarget.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit} autoComplete="off">
        <input type="text" name="username" />
        <button type="submit">Add user</button>
      </form>

      {users.length > 0 && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => dispatch(deleteUser(user.id))}>
                <HiTrash />
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
