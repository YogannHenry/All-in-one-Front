// reducers/wallet.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axiosInstance from '../../utils/axios'; // Importez votre instance Axios depuis axios.ts

interface Wallet {
  id: number;
  name: string;
  icon: string;
  userId: number;
  created_at: string;
  updated_at: string | null;
}

const initialState: Wallet[] = [];

// Action pour récupérer les wallets depuis le backend
export const fetchWallets = createAsyncThunk(
  'wallet/fetchWallets',
  async () => {
    try {
      const response = await axiosInstance.get('/wallet'); // Utilisez l'instance axiosInstance pour les appels liés aux wallets
      return response.data as Wallet[];
    } catch (error) {
      throw new Error('Impossible de récupérer les wallets');
    }
  }
);

// Créez le slice pour les wallets
const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    // Vous pouvez ajouter des reducers supplémentaires ici si nécessaire
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchWallets.fulfilled,
        (state, action: PayloadAction<Wallet[]>) => {
          state = action.payload; // Mettre à jour le state avec les wallets récupérés
        }
      )
      .addCase(fetchWallets.rejected, (state, action) => {
        // Gérer le state en cas d'échec de la récupération des wallets depuis le backend
        // Par exemple, vous pouvez définir une propriété error dans le state pour afficher un message d'erreur dans votre application
      });
  },
});

// Exportez l'action et le reducer
export const {
  /* Exportez d'autres actions si nécessaire */
} = walletSlice.actions;
export default walletSlice.reducer;
