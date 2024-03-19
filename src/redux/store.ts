import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userSlice";
import userRequestReducer from "./reducers/userRequestReducer";



export const store = configureStore({
    reducer:{
        user:userSlice,
        userRequest:userRequestReducer        
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
