import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  quotes: [],
}

export const quoteSlice = createSlice({
    // name of slice
  name: 'quotes',
  initialState,
  reducers: {
   
    addQuote: (state,action) => {
         // reducer(function) to write a new caption
     
     state.quotes.push(action.payload)
    //  payload takes data and puts it into the array
    },

    },
  
    
  },
)

// export the action completed for adding a quote

export const {addQuote} = quoteSlice.actions

export default quoteSlice.reducer