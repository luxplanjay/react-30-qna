import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  entities: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addUser(state, action) {
      state.entities.push(action.payload);
    },
    deleteUser(state, action) {
      state.entities = state.entities.filter(
        user => user.id !== action.payload
      );
    },
  },
});

export const { addUser, deleteUser } = usersSlice.actions;
export const usersSelector = state => state.users.entities;
export const usersReducer = usersSlice.reducer;
