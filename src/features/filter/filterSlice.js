import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    filter: '',
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        searchByName : (state, action) => {
            state.filter = action.payload
        }
    },
});



export const { searchByName } = filterSlice.actions
export default filterSlice.reducer