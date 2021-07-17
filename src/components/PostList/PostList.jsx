export const PostList = ({ posts }) => {
  return (
    <div>
      {posts.map(({ id, title, body, userId }) => {
        return (
          <div key={id}>
            <h2>{title.slice(0, 30)}</h2>
            <p>
              <b>Post id</b>: {id}
            </p>
            <p>
              <b>Author id</b>: {userId}
            </p>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
};
