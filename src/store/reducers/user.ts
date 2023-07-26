import {
  createAction,
  createAsyncThunk,
  createReducer,
} from '@reduxjs/toolkit';

// Au lieu d'utiliser Axios pour mes requêtes,
// je vais utiliser une **instance** d'Axios qui me permet
// de personnaliser mes appels
// import axios from 'axios';
import axiosInstance from '../../utils/axios';

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
export const logout = createAction('/logout');

// Thunk pour la connexion
export const login = createAsyncThunk('/login', async (formData: FormData) => {
  const objData = Object.fromEntries(formData);
  console.log('objData2', objData);

  const { data } = await axiosInstance.post('/login', objData);
  console.log('data', data);

  // après m'être connecté, j'ajoute mon token directement
  // dans l'instance Axios
  axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.token}`;
  localStorage.setItem('token', data.token);
  // le token est utilisé ci-dessus, je n'en ai plus besoin
  // je le supprime de mes données
  delete data.token;

  return data as {
    logged: boolean;
    pseudo: string;
    userId: number;
  };
});

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login.fulfilled, (state, action) => {
      // enregistrer les données retournées par l'API
      // l'action `login.fulfilled` (générée par le thunk)
      // contient un payload avec les données retournées par l'API
      state.logged = action.payload.logged;
      state.pseudo = action.payload.pseudo;
      state.userId = action.payload.userId;
      console.log('action.payload', action.payload);
    })
    .addCase(logout, (state) => {
      // je ré-initialise mes données depuis mon state initial
      state.logged = initialState.logged;
      state.pseudo = initialState.pseudo;

      // à la déconnexion, je supprime le JWT de mon instance Axios
      delete axiosInstance.defaults.headers.common.Authorization;

      localStorage.removeItem('token');
    });
});

export default userReducer;
