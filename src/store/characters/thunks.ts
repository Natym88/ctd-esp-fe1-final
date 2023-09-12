import {createAsyncThunk} from '@reduxjs/toolkit';
import {Character} from './slice';
import BASE_URL from '../../shared/enviroment/APIConfig';

export const GET_CHARACTERS = createAsyncThunk('characters/GET_CHARACTERS', async () : Promise<Character[]>=> {
    const resp = await fetch(`${BASE_URL}character`)
    const data = await resp.json();
    return data.results;
})

export const CHANGE_PAGE = createAsyncThunk('characters/CHANGE_PAGE',async (url: string) : Promise<Character[]> => {
    const resp = await fetch(`${url}`)
    const data = await resp.json();
    return data.results
})

export const FILTERED_CHARACTERS = createAsyncThunk('characters/FILTER_CHARACTERS', async (name: string) : Promise<Character[]> => {
    const resp = await fetch(`${BASE_URL}character/?name=${name}`)
    const data = await resp.json();
    return data.results;
})