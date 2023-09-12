import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GET_DATA } from './thunks';

export type Data = {
    count: number,
    pages: number,
    next: string | null,
    prev: string | null
}

export type DataState = {
    data: Data | null,
    isLoading : boolean,
    isError : string | null
}


const initialState : DataState  = {
    data: null,
    isLoading : false,
    isError : null
}

export const dataSlice = createSlice({
    name : 'data',
    initialState: initialState,
    reducers : {},
    extraReducers : (builder) =>{
        builder.addCase(GET_DATA.pending, ( state ) => {
            state.isLoading = true;
        })

        builder.addCase(GET_DATA.fulfilled, (state, action : PayloadAction<Data>) => {
            state.data = action.payload;
            state.isLoading = false;
        })

        builder.addCase(GET_DATA.rejected, ( state, action ) => {
            state.isLoading = false;
            state.isError = action.error.message ??  'Hay un error';
        })


}
});


const dataReducer = dataSlice.reducer;
export const {  } = dataSlice.actions;
export default dataReducer;