import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from './projects/projectsSlice';



const store = configureStore({
  reducer: {
    projects: projectsReducer
  },
});

export default store;
