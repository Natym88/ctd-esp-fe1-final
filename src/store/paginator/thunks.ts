import {createAsyncThunk} from '@reduxjs/toolkit';
import {Data} from './slice';
import BASE_URL from '../../shared/enviroment/APIConfig';

export const GET_DATA = createAsyncThunk('paginator/GET_DATA', async (url: string) : Promise<Data>=> {
    let resp;
    if(url === ''){
        resp = await fetch(`${BASE_URL}character`)
    }else {
        resp = await fetch(`${url}`)
    }
    const data = await resp.json();
    return data.info;
})

