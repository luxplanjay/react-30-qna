import { useState, useEffect } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { PostList } from 'components/PostList/PostList';

const POSTS_PER_PAGE = 50;
const TOTAL_NUMBER_OF_POSTS = 100;
const TOTAL_PAGES = TOTAL_NUMBER_OF_POSTS / POSTS_PER_PAGE;

async function fetchPosts(page) {
  const params = new URLSearchParams({
    _limit: POSTS_PER_PAGE,
    _page: page,
  });
  const url = `https://jsonplaceholder.typicode.com/posts?${params}`;
  const response = await axios.get(url);
  return response.data;
}

export const PostsPage = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page > TOTAL_PAGES) {
      return toast("We're sorry, there are no more posts to load", {
        icon: '⚠️',
      });
    }

    fetchPosts(page).then(posts =>
      setPosts(prevPosts => [...prevPosts, ...posts]),
    );
  }, [page]);

  const hasPosts = posts.length > 0;

  return (
    <div>
      {hasPosts && <PostList posts={posts} />}
      {hasPosts && (
        <button onClick={() => setPage(prevPage => prevPage + 1)}>
          Fetch more posts
        </button>
      )}
    </div>
  );
};
