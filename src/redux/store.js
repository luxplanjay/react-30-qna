import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersReducer } from './users/usersSlice';
import { pokemonApi } from './pokemon';
import { todoApi } from './todos/todoSlice';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    pokemonApi.middleware,
    todoApi.middleware,
  ],
});

setupListeners(store.dispatch);
