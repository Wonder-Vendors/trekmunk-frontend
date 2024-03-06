import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export interface UserState {
    firstName: string|null;
    lastName: string|null;
    email: string|null;
    password: string|null;
    phoneNumber: string|null;
    isEmailValid: boolean;
    isPhoneNumberValid: boolean;
    image: string|null;
    gender: string|null;
    age: string|null;
    rewardPoints: string|null;
    role: string|null;
  }
const initialState={
    user:{
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        phoneNumber: null,
        isEmailValid: false,
        isPhoneNumberValid: false,
        image: "/user.png",
        gender: null,
        age: null,
        rewardPoints: null,
        role: null,
        token:null,
    } as UserState
}

export const userSlice = createSlice({
    name:"user",
    initialState:initialState,
    reducers:{
      setUser:(state,action:PayloadAction<any>)=>{
        state.user = {...state.user, ...action.payload}
      },
    }
  })

export const {setUser} = userSlice.actions;
export const selectUser = (state:RootState) => state.user
export default userSlice.reducer;
  