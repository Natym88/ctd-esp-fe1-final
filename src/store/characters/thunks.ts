import {createAsyncThunk} from '@reduxjs/toolkit';
import {Character} from './slice';
import BASE_URL from '../../shared/enviroment/APIConfig';

export const GET_CHARACTERS = createAsyncThunk('characters/GET_CHARACTERS', async () : Promise<Character[]>=> {
    const resp = await fetch(`${BASE_URL}character`)
    const data = await resp.json();
    return data.results;
})