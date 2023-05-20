import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
// import axiosApi from '../../../settings/axiosApi'


const initialState = {
    loading: true,
}


// export const getMemberships = createAsyncThunk('index/getMemberships',
//     async () => {
//         const data = await axios.get(`/memberships`)
//         return data
//     }
// )



export const indexSlice = createSlice({
    name: 'index',
    initialState,
    reducers: {



    },
    extraReducers: {

        // [gethome.pending]: (state) => {
        //     state.loading = true
        // },
        // [gethome.fulfilled]: (state, action) => {
        //     state.counters = action?.payload?.counters
        //     state.loading = false
        // },
 

    }
})

// Action creators are generated for each case reducer function
export const { setGraphs } = indexSlice.actions

export default indexSlice.reducer

