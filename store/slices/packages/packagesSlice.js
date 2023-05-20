import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    loading: true,
    memberships: [],
    membershipsloading: false,
    typePackage: 'monthly',
}




export const getMemberships = createAsyncThunk('index/getMemberships',
    async (_, { rejectWithValue }) => {
        try {
            const data = await axios.get(`/memberships`)
            return data.data


        } catch (error) {
            return rejectWithValue(error.response.data)
        }
    }
)



export const packagesSlice = createSlice({
    name: 'packages',
    initialState,
    reducers: {

        changeTypePackage: (state, action) => {
            state.typePackage = action.payload
        },

    },
    extraReducers: {

        [getMemberships.pending]: (state) => {
            state.membershipsloading = true
        },
        [getMemberships.fulfilled]: (state, action) => {
            state.memberships = action?.payload?.memberships
            state.membershipsloading = false
        },
        [getMemberships.rejected]: (state, action) => {
        },

        [HYDRATE]: (state, action) => {
            state.memberships = action.payload?.packages?.memberships
        },

    }
})

// Action creators are generated for each case reducer function
export const { changeTypePackage } = packagesSlice.actions

export default packagesSlice.reducer
