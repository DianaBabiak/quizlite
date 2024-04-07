import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {Card} from "../types/types.ts";

interface CardsState {
    cards:Card[]
}

const initialState: CardsState = {
    cards: [{
        id: 1,
        term: 'Hi, my name is Dziana. Nice to have you on my app.',
        determination: 'Привет, меня зовут Диана. Рада видеть Вас в моем приложении.'
    }],
}

export const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {
        deleteCard: (state, action: PayloadAction<number>) => {
            const index = state.cards.findIndex(card => card.id === action.payload);

            if (index !== -1) {
                state.cards.splice(index, 1);
            }
        },
        createCards: (state, action: PayloadAction<Card[]>) => {
            state.cards.push(...action.payload);
        },
    },
})

export const {deleteCard, createCards } = cardsSlice.actions
export const cardsReducer = cardsSlice.reducer
