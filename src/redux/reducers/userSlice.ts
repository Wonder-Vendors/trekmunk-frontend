import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface UserState {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    isEmailValid: boolean;
    isPhoneNumberValid: boolean;
    image: string;
    gender: string;
    age: number;
    rewardPoints: string;
    role: string;
    _id:string
  }
const initialState={
    user:null as UserState|null
}

export const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
      setUser:(state,action:PayloadAction<any>)=>{
        state.user = action.payload
      },
      deleteUser:(state)=>{
        state.user = null
      },
      updateUser:(state,action:PayloadAction<any>)=>{
        state.user = {...state.user,...action.payload}
      }
    }
  })

export const {setUser,deleteUser} = userSlice.actions;
export const selectUser = (state:RootState) => state.user
export default userSlice.reducer;
  