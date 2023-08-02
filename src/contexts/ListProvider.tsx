import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import API_URL from '../components/API_URL';


// Créez le contexte
export const ListContext = createContext(
  {
    lists: {
      id: 0,
      name: '',
    },
    getAllListFromContext: () => [],
    
  }
);

// Créez le fournisseur du contexte (ListProvider)
const ListProvider = ({ children }) => {
  const [lists, setLists] = useState([]);

  // Définissez la fonction pour récupérer les listes via la requête
  const getLists = async () => {
    try {
      const { data } = await axios.get(`${API_URL}/list`);
      setLists(data);
    } catch (error) {
      // Gérez les erreurs ici si nécessaire
      console.error('Erreur lors de la récupération des listes :', error);
    }
  };

  const getAllListFromContext = (newList) => {
    setLists(newList);
  };

  // Appelez getLists une seule fois lorsque le composant est monté
  useEffect(() => {
    getLists();
  }, []);

  // Renvoyez le contexte pour qu'il soit accessible aux composants enfants
  return (
    <ListContext.Provider value={{ lists, getAllListFromContext }}>
      {children}
    </ListContext.Provider>
  );
};

export default ListProvider;
