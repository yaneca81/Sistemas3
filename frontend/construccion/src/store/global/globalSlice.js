import { createSlice } from '@reduxjs/toolkit';

export const globalSlice = createSlice({
    name: 'globalStates',
    initialState: {
        alertMessage: '',
        isLoading: false,
        isSaving: false,
        isLoadingDelete: false
    },
    reducers: {
        setAlertMessage: (state, action) => {
            state.alertMessage = action.payload;
        },
        setIsLoading: (state, action) => {
            state.isLoading = action.payload;
        },
        setIsSaving: (state, action) => {
            state.isSaving = action.payload;
        },
        setIsLoadingDelete: (state, action) => {
            state.isLoadingDelete = action.payload;
        }
    },
});

export const { setAlertMessage, setIsLoading, setIsSaving, setIsLoadingDelete } = globalSlice.actions;