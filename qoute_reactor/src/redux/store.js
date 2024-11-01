import {configureStore} from '@reduxjs/toolkit'
import quoteReducer from './quote'


const store = configureStore({
    reducer: {
        // To put the new qoute in the store
        quotes: quoteReducer
    }
});

export default store;

