import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: [
    {
        id: 1 ,
        img : 'pc.png',
        nom:'ASUS VIVOBOOK',
        prix : '2500dt ',
        brand : 'ASUS',
        description: 'This is a section of descriptions...',
        quantity : 1 ,
    },
    {
      id: 2 ,
        img : 'pc.png',
        nom:'DELL G15',
        prix : '2500dt ',
        brand : 'DELL',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
      id: 3 ,
        img : 'pc.png',
        nom:'ASUS ROG',
        prix : '2500dt ',
        brand : 'ASUS',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
      id: 4 ,
        img : 'pc.png',
        nom:'HP OMEN',
        prix : '2500dt ',
        brand : 'HP',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
      id: 5 ,
        img : 'pc.png',
        nom:'LENOVO 12',
        prix : '2500dt ',
        brand : 'LENOVO',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
      id: 6 ,
        img : 'pc.png',
        nom:'MSI 1',
        prix : '2500dt ',
        brand : 'MSI',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
        
      id: 7 ,
        img : 'pc.png',
        nom:'ASUS TUF',
        prix : '2500dt ',
        brand : 'ASUS',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
      id: 8,
        img : 'pc.png',
        nom:'DELL 2',
        prix : '2500dt ',
        brand : 'DELL',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
      id: 9 ,
        img : 'pc.png',
        nom:'LENOVO 2',
        prix : '2500dt ',
        brand : 'LENOVO',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
      id: 10 ,
        img : 'pc.png',
        nom:'MSI 2',
        prix : '2500dt ',
        brand : 'MSI',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

        
    },
    {
      id: 11 ,
        img : 'pc.png',
        nom:'TOSHIBA 1',
        prix : '2500dt ',
        brand : 'TOSHIBA',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
      id: 12 ,
        img : 'pc.png',
        nom:'ASUS FLIBOOK',
        prix : '3500dt ',
        brand : 'ASUS',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
      id: 13 ,
        img : 'pc.png',
        nom:'HP PAVILLON',
        prix : '2500dt ',
        brand : 'HP',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
      id: 14 ,
        img : 'pc.png',
        nom:'LENOVO 3',
        prix : '4500dt ',
        brand : 'LENOVO',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
      id: 15 ,
        img : 'pc.png',
        nom:'LENOVO 4',
        prix : '1500dt ',
        brand : 'LENOVO',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
      id: 16 ,
        img : 'pc.png',
        nom:'LENOVO 5',
        prix : '500dt ',
        brand : 'LENOVO',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
      id: 17 ,
        img : 'pc.png',
        nom:'TOSHIBA 2',
        prix : '5500dt ',
        brand : 'TOSHIBA',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
    {
      id: 18 ,
        img : 'pc.png',
        nom:'HP Elitebook',
        prix : '6500dt ',
        brand : 'HP',
        description: 'This is a section of descriptions...',
        quantity : 1 ,

    },
  
],

};

const cardSlice = createSlice({
    name: 'card',
    initialState,
    reducers: {
     
     
      
      removeFavorite(state, action) {
        const { id } = action.payload;
        const index = state.favorites.findIndex(fav => fav.id === id);
        if (index !== -1) {
          state.favorites.splice(index, 1);
        }
      },
    },
  });
  
  export const { addFavorite, removeFavorite } = cardSlice.actions;
  
  export default cardSlice.reducer;
