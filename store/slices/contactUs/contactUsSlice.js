import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading: false,
    apiErrors: [],
    resData: []
}



export const contactUsThunk = createAsyncThunk('contactUs/contactUsThunk',
    async (payload, { rejectWithValue }) => {
        try {
            const data = await axios.post('/contact_us', payload)
            return data.data

        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)



export const contactUsSlice = createSlice({
    name: 'contactUs',
    initialState,
    reducers: {

        setResData: (state) => {
            state.resData = []
        },

    },
    extraReducers: {

        [contactUsThunk.pending]: (state) => {
            state.loading = true
            state.apiErrors = []
        },
        [contactUsThunk.fulfilled]: (state, action) => {
            state.resData = action.payload
            state.loading = false
        },
        [contactUsThunk.rejected]: (state, action) => {
            state.apiErrors = action.payload
            state.loading = false
        }


    }
})

export const { setResData } = contactUsSlice.actions

export default contactUsSlice.reducer

