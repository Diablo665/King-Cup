import { createSlice } from "@reduxjs/toolkit";
import { getCardsList } from "../utils/helper";

const {status, cards} = getCardsList();

const cardInfoSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: cards,
        prevCards: [],
        rules: [],
        endCards: {'K': 4},
        customCardAdd: status,
        endCardTookValue: {'K': 0},
        isStartGame: false,
        isRuleAdd: false
    },
    reducers: {
        setCards: (state, actions) => {
            state.cards = actions.payload
        },

        addRule: (state, actions) => {
            state.rules.push(actions.payload);
            state.isRuleAdd = true;
        },

        setCustomCardAdded: (state, actions) => {
            state.customCardAdd = actions.payload;
        },

        goToPrevCard: (state) => {

            const lastPrevCard = state.prevCards.pop();

            if(lastPrevCard.cardNumber in state.endCards){
                state.endCardTookValue[lastPrevCard.cardNumber] -= 1;
            }
          
            state.cards = [lastPrevCard, ...state.cards];

        },

        nextStep: (state) => {
            state.prevCards = [...state.prevCards, state.cards[0]];
            state.cards = state.cards.slice(1);
            state.isRuleAdd = false;

        },

        updateEndCardTook: (state, actions) => {
            state.endCardTookValue[actions.payload] += 1;
        },

        updateStateBeforeGame: (state, actions) => {
            state.cards = actions.payload;
            state.prevCards = [];
            state.rules = [];
            Object.keys(state.endCardTookValue).forEach(element => {
                state.endCardTookValue[element] = 0;
            });
        },

        stopGame: (state) => {
            state.isStartGame = false;
        },

        startGame: (state) => {
            state.isStartGame = true;

        },

        setEndCards: (state, actions) => {
            state.endCards = actions.payload.endCards;
            state.endCardTookValue = actions.payload.endTook;
        }

    }
})

export const {setCards, addRule, goToPrevCard, nextStep, updateEndCardTook, updateStateBeforeGame, stopGame, startGame, setCustomCardAdded, setEndCards} = cardInfoSlice.actions;

export default cardInfoSlice.reducer;