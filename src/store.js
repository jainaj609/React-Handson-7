import { configureStore } from "@reduxjs/toolkit";
import StudentReducer from "./features/StudentSlice";

export default configureStore({
    reducer:{
        student: StudentReducer
    }
})