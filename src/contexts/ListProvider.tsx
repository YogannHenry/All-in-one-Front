import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../components/API_URL';

type List = {
  id: number;
  name: string;
};

type ListContextType = {
  lists: List[];
  getAllListFromContext: () => List[];
};

export const ListContext = createContext<ListContextType | undefined>(undefined);

const ListProvider: React.FC = ({ children }: React.PropsWithChildren<{}>)=> {
  const [lists, setLists] = useState<List[]>([]);

  const getLists = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/list`);
      setLists(data);
    } catch (error) {
      // Gérez les erreurs ici si nécessaire
      console.error('Erreur lors de la récupération des listes :', error);
    }
  };

  const getAllListFromContext = () => {
    return lists; // Renvoie simplement les listes actuelles
  };

  useEffect(() => {
    getLists();
  }, []);

  return (
    <ListContext.Provider value={{ lists, getAllListFromContext }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
