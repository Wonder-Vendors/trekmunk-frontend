import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'


const initialState:{userId:null|string} = {
    userId:null
}

export const userIdSlice = createSlice({
    name:"userId",
    initialState,
    reducers:{
        setUserId:(state,action:PayloadAction<any>)=>{
            state.userId = action.payload
        },
        removeUserId:(state)=>{
            state.userId = null
        }
    }
})

export const {setUserId,removeUserId} = userIdSlice.actions
export const selectUserId = (state:RootState) => state.userId; 
export default userIdSlice.reducer;