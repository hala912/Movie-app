import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  password: "",
  isAuthenticated: false,
}; 

const authslice = createSlice({
    name: "authntication",
    initialState: initialState,
    reducers:{
      login:(state,action)=>{
        state.username = action.payload.username
        state.isAuthenticated = true;
      },
      logout(state){
        state.username=""
        state.isAuthenticated= false;
      }
    }

});

export default authslice.actions;
export const {login,logout}=authslice.actions