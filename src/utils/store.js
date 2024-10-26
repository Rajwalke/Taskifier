import { configureStore } from "@reduxjs/toolkit";
import carddataReducer from "./Cardslice";
const store=configureStore({
    reducer:{
        carddata:carddataReducer,
    }
})

export default store;