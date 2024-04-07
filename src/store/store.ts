import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import {cardsReducer} from "./cardsSlice.ts";
import {loadState, saveState} from "../localStorage/localStorage.ts";
import throttle from 'lodash.throttle';

const persistedState = loadState();
export const store = configureStore({
    reducer: {
        cards: cardsReducer,
    },
    preloadedState:{
        cards:persistedState
    }
})

type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()

store.subscribe(throttle(() => {
    saveState(store.getState().cards);
}, 1000));