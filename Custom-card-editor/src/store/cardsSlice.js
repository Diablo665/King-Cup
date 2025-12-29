import { createSlice } from '@reduxjs/toolkit';
import { getInfoFromLocalSession,  } from '../utils/helper';

const cardsList = getInfoFromLocalSession('customCardEdit');

const cardSlice = createSlice({
    name: "cards",
    initialState: {
        savedCard: cardsList,
        isUploadError: false,
        isEditingPanelOpen: false,
        isCardsUpload: cardsList.length > 0,
        editingID: 0,
        lastID: cardsList.length > 0 ? cardsList[cardsList.length - 1].id : 0
    },
    reducers: {
        addNewCard: (state, action) => {
            state.lastID += 1;
            
            const newCard = {
              ...action.payload,
              id: state.lastID
            };
            state.savedCard.push(newCard);

            sessionStorage.setItem('customCardEdit', JSON.stringify(state.savedCard));
        },

        deleteCard: (state, action) => {
            state.savedCard = state.savedCard.filter((elem) => elem.id !== action.payload);
            sessionStorage.setItem('customCardEdit', JSON.stringify(state.savedCard));
        },

        editSavedCard: (state, action) => {
            console.log()
            state.savedCard = state.savedCard.map((elem) => {
                if(Number(elem.id) !== Number(action.payload.id)) {
                    return elem
                }

                return {
                    "id": action.payload.id,
                    "cardNumber": action.payload.cardNumber,
                    "cardSuit": action.payload.cardSuit,
                    "text": action.payload.text,
                    "rules": action.payload.rules
                }
            })

            sessionStorage.setItem('customCardEdit', JSON.stringify(state.savedCard));
        },

        setCardsAfterUpload: (state, action) => {
            state.savedCard = action.payload;
        },

        setIsUploadError: (state, action) => {
            state.isUploadError = action;
        },

        setIsCardsUpload: (state, action) => {
            state.isCardsUpload = action.payload;
        },

        openEditingPanel: (state, action) => {
            state.editingID = action.payload;
            state.isEditingPanelOpen = true
        },

        closeEditingPanel: (state) => {
            state.isEditingPanelOpen = false
        }
    }
}) 

export const {addNewCard, deleteCard, editSavedCard, setCardsAfterUpload, setIsUploadError, setIsCardsUpload, openEditingPanel, closeEditingPanel} = cardSlice.actions;

export default cardSlice.reducer;