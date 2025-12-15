import { createSlice } from "@reduxjs/toolkit";

const gameStatuses = createSlice({
    name: 'statuses',
    initialState: {
        isSmallScreen: window.matchMedia('(max-width: 600px)').matches,
        loading: 'loading' ,
        isEndCardInfoOpen: false,
        isAllEndCardsTook: false,
        isStartGame: false,
    },
    
    reducers: {
        updateScreenSize: (state ) => {
            state.isSmallScreen = window.matchMedia('(max-width: 600px)').matches;
        },

        setisEndCardInfoOpen: (state) => {
            state.isEndCardInfoOpen = !state.isEndCardInfoOpen;
        },

        setisAllEndCardsTook: (state, actions) => {
            state.isAllEndCardsTook = actions.payload;
        },        
        
        stopGame: (state) => {
            state.isStartGame = false;
        },

        startGame: (state) => {
            state.isStartGame = true;

        },
    }
})

export const {updateScreenSize, setisEndCardInfoOpen, setisAllEndCardsTook, startGame, stopGame} = gameStatuses.actions;

export default gameStatuses.reducer;