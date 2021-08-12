import { Toaster } from 'react-hot-toast';
import { Switch, Route } from 'react-router-dom';
import { TodosPage } from 'pages/Todos';
import { HomePage } from 'pages/Home';
import { CreateTodoPage } from 'pages/CreateTodo';

export const App = () => {
  return (
    <>
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/todos" exact>
          <TodosPage />
        </Route>
        <Route path="/todos/create">
          <CreateTodoPage />
        </Route>
      </Switch>
      <Toaster position="top-right" />
    </>
  );
};
