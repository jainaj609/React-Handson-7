import { createSlice } from "@reduxjs/toolkit";
import Student from '../Data';

export const StudentSlice = createSlice({
    name: 'post',
    initialState:Student,
    reducers: {
        StudentAdded: (state,action)=>{
            state.push(action.payload)
        },
        EditStudent: (state,action)=>{
            state[action.payload.id] = action.payload;
        }
    }
})

export default StudentSlice.reducer ;
export const {StudentAdded, EditStudent} = StudentSlice.actions;