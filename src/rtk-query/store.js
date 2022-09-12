import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './features/project/api/apiSlice'; 
import filterReducer from './features/project/filter/filterSlice';


export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        filter: filterReducer
    },
    middleware: (getDefaultMiddlewares) => getDefaultMiddlewares().concat(apiSlice.middleware),
});