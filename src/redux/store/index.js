import { configureStore } from "@reduxjs/toolkit";
import cart from "../reducer/cart";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

const config = {
    key: "root",
    storage
}

const allReducers = combineReducers ({
    cart : cart ,
})

const reducers = persistReducer (config,allReducers)

const store = configureStore ({
    
       reducer:reducers
  
})
export default store