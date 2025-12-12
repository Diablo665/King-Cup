import { configureStore } from "@reduxjs/toolkit";
import cardInfoSlice from './cardInfoSlice'
import gameStatuses from "./gameStatuses";

const store = configureStore({
    reducer: {
        game: cardInfoSlice,
        statuses: gameStatuses
    }
})

export default store;