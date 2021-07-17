import { Toaster } from 'react-hot-toast';
import { Switch, Route, Link } from 'react-router-dom';
import { CountriesPage } from 'pages/Countries';
import { PostsPage } from 'pages/Posts';

export const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/countries">Страны</Link>
        </li>
        <li>
          <Link to="/posts">Посты</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/countries">
          <CountriesPage />
        </Route>
        <Route path="/posts">
          <PostsPage />
        </Route>
      </Switch>
      <Toaster position="top-right" />
    </div>
  );
};
