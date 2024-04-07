import {CardsState} from "../store/cardsSlice.ts";

export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('cards');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

export const saveState = (state:CardsState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('cards', serializedState);
    } catch {
        console.log("An error occurred")
    }
};