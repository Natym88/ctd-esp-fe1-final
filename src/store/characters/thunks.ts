import {createAsyncThunk} from '@reduxjs/toolkit';
import BASE_URL from '../../shared/enviroment/APIConfig';
import { APIResponse, Character } from './slice';

export const GET_CHARACTERS = createAsyncThunk('characters/GET_CHARACTERS', async () : Promise<APIResponse>=> {
    const resp = await fetch(`${BASE_URL}character`)
    const data = await resp.json();
    return data;
})

export const CHANGE_PAGE = createAsyncThunk('characters/CHANGE_PAGE',async (url: string) : Promise<APIResponse> => {
    const resp = await fetch(`${url}`)
    const data = await resp.json();
    return data
})

export const FILTERED_CHARACTERS = createAsyncThunk('characters/FILTER_CHARACTERS', async (filter: string) : Promise<APIResponse> => {
    const resp = await fetch(`${BASE_URL}character/?${filter}`)
    const data = await resp.json();
    return data;
})

export const CHARACTER_DETAILS = createAsyncThunk('characters/CHARACTER_DETAILS', async (filter: string) : Promise<Character> => {
    const resp = await fetch(`${BASE_URL}character/${filter}`)
    const data = await resp.json();
    return data;
})