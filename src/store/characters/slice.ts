import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CHANGE_PAGE, FILTERED_CHARACTERS, GET_CHARACTERS } from './thunks';

export interface Location {
    name: string,
    url: string
}

export interface CharacterComplete {
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
    favoriteCharacters: Character[],
    isLoading : boolean,
    isError : string | null
}


const initialState : CharacterState  = {
    characters : [],
    favoriteCharacters: [],
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
                state.favoriteCharacters.push(findCharacter)
            }
        },
        DROP_FAVORITE : (state, action : PayloadAction<number>) => {
            const findCharacter = state.characters.find( c => c.id === action.payload);
            if(findCharacter){
                findCharacter.esFavorito = false;
            }
            state.favoriteCharacters = state.favoriteCharacters.filter( c => c.id !== action.payload);
        },
        DROP_ALL_FAVORITES : (state, action : PayloadAction<void>) => {
            state.characters.forEach( c => { c.esFavorito = false});
            state.favoriteCharacters = [];
        }
    },
    extraReducers : (builder) =>{
        builder.addCase(GET_CHARACTERS.pending, ( state ) => {
            state.isLoading = true;
        })

        builder.addCase(GET_CHARACTERS.fulfilled, (state, action : PayloadAction<Character[]>) => {
            state.characters = action.payload;
            state.characters.forEach( c => { c.esFavorito = !!state.favoriteCharacters.find(fc => fc.id === c.id) })
            state.isLoading = false;
        })

        builder.addCase(GET_CHARACTERS.rejected, ( state, action ) => {
            state.isLoading = false;
            state.isError = action.error.message ??  'Hay un error';
        })

        builder.addCase(CHANGE_PAGE.pending, ( state ) => {
            state.isLoading = true;
        })

        builder.addCase(CHANGE_PAGE.fulfilled, (state, action : PayloadAction<Character[]>) => {
            state.characters = action.payload;
            state.characters.forEach(c => {c.esFavorito = !!state.favoriteCharacters.find(fc => fc.id === c.id) })
            state.isLoading = false;
        })

        builder.addCase(CHANGE_PAGE.rejected, ( state, action ) => {
            state.isLoading = false;
            state.isError = action.error.message ??  'Hay un error';
        })

        builder.addCase(FILTERED_CHARACTERS.pending, ( state ) => {
            state.isLoading = true;
        })

        builder.addCase(FILTERED_CHARACTERS.fulfilled, (state, action : PayloadAction<Character[]>) => {
            state.characters = action.payload;
            state.characters.forEach( c => { c.esFavorito = !!state.favoriteCharacters.find(fc => fc.id === c.id) })
            state.isLoading = false;
        })

        builder.addCase(FILTERED_CHARACTERS.rejected, ( state, action ) => {
            state.isLoading = false;
            state.isError = action.error.message ??  'Hay un error';
        })
    }
});


const characterReducer = characterSlice.reducer;
export const { ADD_FAVORITE, DROP_FAVORITE, DROP_ALL_FAVORITES } = characterSlice.actions;
export default characterReducer;