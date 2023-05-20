import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const initialState = {
    loading: false,
    apiErrors: [],
    resData: []
}



export const fabsContactUsThunk = createAsyncThunk('contactUs/fabs/fabsContactUsThunk',
    async (payload, { rejectWithValue }) => {
        try {
            const data = await axios.post('/contact_us', payload)
            return data.data

        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)



export const fabsSlice = createSlice({
    name: 'fabs',
    initialState,
    reducers: {

        setResData: (state) => {
            state.resData = []
        },

    },
    extraReducers: {

        [fabsContactUsThunk.pending]: (state) => {
            state.loading = true
            state.apiErrors = []
        },
        [fabsContactUsThunk.fulfilled]: (state, action) => {
            state.resData = action.payload
            state.loading = false
        },
        [fabsContactUsThunk.rejected]: (state, action) => {
            state.apiErrors = action.payload
            state.loading = false
        }


    }
})

export const { setResData } = fabsSlice.actions

export default fabsSlice.reducer

