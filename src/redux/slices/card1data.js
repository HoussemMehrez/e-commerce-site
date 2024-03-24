import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cardData: [
    {
      id: 1,
      imageSrc: 'pc.png',
      title: 'pc gamer1',
  
    },
    {
      id: 2,
      imageSrc: 'pc.png',
      title: 'pc gamer 2',
    
    },
    {
      id: 3,
      imageSrc: 'pc.png',
      title: 'pc gamer3',
     
    },
    {
      id: 4,
      imageSrc: 'pc.png',
      title: 'pc gamer3',
     
    }, {
      id: 5,
      imageSrc: 'pc.png',
      title: 'pc gamer3',
     
    }, {
      id: 6,
      imageSrc: 'pc.png',
      title: 'pc gamer3',
     
    }, {
      id: 7,
      imageSrc: 'pc.png',
      title: 'pc gamer3',
      
     
    },
    {
      id: 8,
      imageSrc: 'pc.png',
      title: 'pc gamer3',
     
    },
    {
      id: 9,
      imageSrc: 'pc.png',
      title: 'pc gamer3',
     
    },
    
  ],
};
const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
      addFavorite: (state, action) => {
        state.cardData.push(action.payload);
      },
      removeFavorite: (state, action) => {
        state.cardData = state.cardData.filter(item => item.id !== action.payload.id);
      },
    },
  });
  
  export const { addFavorite, removeFavorite } = favoritesSlice.actions;
  export default favoritesSlice.reducer;
  