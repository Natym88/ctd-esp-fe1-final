import { configureStore} from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import characterReducer from "./characters/slice";
import dataReducer from "./paginator/slice";

const store = configureStore({
   // Reducer
   reducer: {
    character: characterReducer,
    data: dataReducer
   }
});

// Tipamos el hook useSelector y useDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

type DispatchFunc = () => AppDispatch;


export const useAppDispatch : DispatchFunc = useDispatch
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;


export default store;