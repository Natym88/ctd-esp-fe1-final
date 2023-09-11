import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { GET_CHARACTERS } from './thunks';

export interface Location {
    name: string,
    url: string
}

export type CharacterComplete = {
    id: number,
    name: string,
    image: string,
    url: string,
    status: string,
    species: string,
    type: string,
    gender: string,
    origin: Location,
    location: Location,
    episode: string[],
    created: string
}
export type Character = CharacterComplete & {
    esFavorito: boolean
}

export type CharacterState = {
    characters : Character[],
    filteredCharacters: Character[] | null,
    isLoading : boolean,
    isError : string | null
}


const initialState : CharacterState  = {
    characters : [],
    filteredCharacters: null,
    isLoading : false,
    isError : null
}

export const characterSlice = createSlice({
    name : 'character',
    initialState: initialState,
    reducers : {
        ADD_FAVORITE : (state, action : PayloadAction<number>) => {
            const findCharacter = state.characters.find( c => c.id === action.payload);
            if(findCharacter){
                findCharacter.esFavorito = true;
            }
        },
        DROP_FAVORITE : (state, action : PayloadAction<number>) => {
            const findCharacter = state.characters.find( c => c.id === action.payload);
            if(findCharacter){
                findCharacter.esFavorito = false;
            }
        },
        FILTER_CHARACTERS : (state, action : PayloadAction<string>) => {
            let filteredCharacters: Character[];
            if(action.payload === "") {
                state.filteredCharacters = state.characters;
            } else {
                state.filteredCharacters = state.characters.filter( c => new RegExp(action.payload, 'i').test(c.name))
            }
        }
    },
    extraReducers : (builder) =>{
        builder.addCase(GET_CHARACTERS.pending, ( state ) => {
            state.isLoading = true;
        })

        builder.addCase(GET_CHARACTERS.fulfilled, (state, action : PayloadAction<Character[]>) => {
            state.characters = action.payload;
            state.characters.forEach( c => { c.esFavorito = false })
            state.isLoading = false;
        })

        builder.addCase(GET_CHARACTERS.rejected, ( state, action ) => {
            state.isLoading = false;
            state.isError = action.error.message ??  'Hay un error';
        })


}
});


const characterReducer = characterSlice.reducer;
export const { ADD_FAVORITE, DROP_FAVORITE, FILTER_CHARACTERS } = characterSlice.actions;
export default characterReducer;