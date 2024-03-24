import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  ordData:[
    {
        id : 1 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 2 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,
    },
    {
        id : 3 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 4 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 5 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 6 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 7 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 8 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 9 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 10 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 11 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 12 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 13 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 14 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 15 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 16 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 17 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 18 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 19 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    },
    {
        id : 20 ,
        date : '8 nov 2023' ,
        nameUser : 'Emir' ,
        adresse : 'Cite Ons, Sfax',
        lastnameuser: 'Hammami' ,

    }
  ],
  currentPage: 1,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    removeItem: (state, action) => {
      state.ordData = state.ordData.filter(item => item.id !== action.payload);
    },
    
  }
});

export const { setCurrentPage, removeItem } = userSlice.actions;

export default userSlice.reducer;