import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';

import axios from 'axios';

const API_URL = 'http://localhost:3002/api';

interface UserState {
  logged: boolean;
  pseudo: string | null;
  userId: number | null;
}
export const initialState: UserState = {
  logged: false,
  pseudo: null,
  userId: null,
};

// Action pour la déconnexion
export const logout = createAsyncThunk(`${API_URL}/logout`, async () => {
  // Supprimer le token du local storage
  localStorage.removeItem('token');
  return false;
});

// Thunk pour la connexion
export const login = createAsyncThunk(
  '/login',
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const objData = Object.fromEntries(formData);
      console.log('objData2', objData);

      const { data } = await axios.post(`${API_URL}/login`, objData);
      console.log('data', data);
      // Après la connexion réussie, stockez le token dans le local storage
      localStorage.setItem('token', data.token);

      return data as {
        logged: boolean;
        pseudo: string;
        userId: number;
      };
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const initializeUser = createAction('user/initialize');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state, action) => {
      state.logged = action.payload.logged;
      state.pseudo = action.payload.pseudo;
      state.userId = action.payload.userId;
      console.log('action.payload', action.payload);
    })
    .addCase(logout.fulfilled, (state, action) => {
      state.logged = action.payload;
      state.pseudo = null;
      state.userId = null;
    })
    .addCase(initializeUser, (state) => {
      // Vérifiez si le token est présent dans le local storage et définissez l'état "logged" en conséquence
      const token = localStorage.getItem('token');
      state.logged = !!token;
    });
});

export default userReducer;
