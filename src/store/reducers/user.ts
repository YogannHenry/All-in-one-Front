import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';
import axios from 'axios';

interface UserState {
  logged: boolean;
  pseudo: string | null;
  token: string | null;
}
export const initialState: UserState = {
  logged: false,
  pseudo: null,
  token: null,
};

// Action pour la déconnexion
export const logout = createAction('user/logout');

// Thunk pour la connexion
export const login = createAsyncThunk(
  'user/login',
  async (formData: FormData) => {
    const objData = Object.fromEntries(formData);
    console.log(objData);

    const { data } = await axios.post(
      'https://orecipes-api.onrender.com/api/login',
      objData
    );

    return data as {
      logged: boolean;
      pseudo: string;
      token: string;
    };
  }
);

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state, action) => {
      // enregistrer les données retournées par l'API
      // l'action `login.fulfilled` (générée par le thunk)
      // contient un payload avec les données retournées par l'API
      state.logged = action.payload.logged;
      state.pseudo = action.payload.pseudo;
      state.token = action.payload.token;
    })
    .addCase(logout, (state) => {
      // je ré-initialise mes données depuis mon state initial
      state.logged = initialState.logged;
      state.pseudo = initialState.pseudo;
      state.token = initialState.token;
    });
});

export default userReducer;
