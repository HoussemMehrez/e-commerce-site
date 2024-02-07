import { createContext, useContext, useState } from 'react';

const FavoritesContext = createContext();

export const useFavorites = () => {
  return useContext(FavoritesContext);
};

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (item) => {
    if (!favorites.some((fav) => fav.id === item.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, item]);
    }
  };
  
  const removeFavorite = (item) => {
    setFavorites((prevFavorites) => prevFavorites.filter((favItem) => favItem !== item));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite,removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};
