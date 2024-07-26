import { createContext, useContext, useState } from 'react';

const FavoriteContext = createContext();

export const useFavoriteContext = () => useContext(FavoriteContext);

export const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (course) => {
    setFavorites((prev) => [...prev, course]);
  };

  const removeFavorite = (courseId) => {
    setFavorites((prev) => prev.filter((course) => course.id !== courseId));
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoriteContext.Provider>
  );
};
