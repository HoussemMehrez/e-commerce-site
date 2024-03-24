import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    ordData:[
        {
            id : 1 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 2 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'AVIVOBOOK' ,
        },
        {
            id : 3 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 4 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 5 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,
        },
        {
            id : 6 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,
        },
        {
            id : 7 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 8 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 9 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,
        },
        {
            id : 10 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 11 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 12 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 13 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 14 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,
        },
        {
            id : 15 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 16 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 17,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 18 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 19 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,

        },
        {
            id : 20 ,
            Date : '8 nov 2023' ,
            Namecustomer : 'Houssem' ,
            statut : 'delivered',
            amount : '200dt' ,
            product : 'ASUS VIVOBOOK' ,


        }
    ],
    currentPage: 1,
};
export const orderSlice = createSlice({
    name: 'order',
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
  
  export const { setCurrentPage, removeItem } = orderSlice.actions;
  
  export default orderSlice.reducer;
