import { Toaster } from 'react-hot-toast';
import { Switch, Route } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { UsersPage } from 'pages/Users';

export const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/users">
          <UsersPage />
        </Route>
      </Switch>
      <Toaster position="top-right" />
    </div>
  );
};
