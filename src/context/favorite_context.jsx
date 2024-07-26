import React, { createContext, useReducer, useContext } from 'react';

const FavoritesContext = createContext();

const initialState = {
  favoriteCourses: [],
};

const favoritesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_FAVORITE':
      return {
        ...state,
        favoriteCourses: [...state.favoriteCourses, action.payload],
      };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favoriteCourses: state.favoriteCourses.filter(
          (course) => course.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  const addFavorite = (course) => {
    dispatch({ type: 'ADD_FAVORITE', payload: course });
  };

  const removeFavorite = (id) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: id });
  };

  return (
    <FavoritesContext.Provider value={{ state, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
