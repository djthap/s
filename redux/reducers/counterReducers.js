import { createSlice  } from "@reduxjs/toolkit";

const initialState = [];
const countSlice =createSlice(
    {
        name:"addition",
        initialState,
        reducers:{
            counterDate:(state,action) =>{
                state.data=action.payload
            }
        }
    }
)

export const {counterDate} =countSlice.actions;

const totalReducer = countSlice.reducer;

export default totalReducer

