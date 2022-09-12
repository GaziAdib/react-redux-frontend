import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    filterByType: '',
    sortType:'',
    search:''
}

// create slice for filter
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        sortTypes: (state, action) => {
            state.sortType = action.payload;
        },
        filtered: (state, action) => {                     
            state.filterByType = action.payload;
        },
        searched: (state, action) => {
            state.search = action.payload.toLowerCase();
        },
        clearAll: (state) => {
            state.filterByType = '';
            state.search = ''
        }
    }

});

export default filterSlice.reducer;
export const { filtered, sortTypes, searched, clearAll } = filterSlice.actions

