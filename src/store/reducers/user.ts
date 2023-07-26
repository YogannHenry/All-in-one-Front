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
      // En cas d'erreur, utilisez rejectWithValue pour renvoyer l'erreur avec le payload
      return rejectWithValue(error.response.data);
    }
  }
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state, action) => {
      state.logged = action.payload.logged;
      state.pseudo = action.payload.pseudo;
      state.userId = action.payload.userId;
      console.log('action.payload', action.payload);
    })
    .addCase(logout, (state) => {
      state.logged = initialState.logged;
      state.pseudo = initialState.pseudo;
    });
});

export default userReducer;
