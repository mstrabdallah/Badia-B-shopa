import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    loading: true,
    msgHandleApi: 0

}



export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setMsgHandleApi: (state, action) => {
            state.msgHandleApi = action.payload
        }



    },
    extraReducers: {


    }
})

// Action creators are generated for each case reducer function
export const { setMsgHandleApi } = settingsSlice.actions

export default settingsSlice.reducer

