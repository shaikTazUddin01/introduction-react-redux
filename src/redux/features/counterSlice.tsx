import { createSlice } from "@reduxjs/toolkit";


export type TCounter={
  count:number
}

const initialState :TCounter= { count: 0 };

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    incrementIn5:(state,action)=>{
      state.count =state.count + action.payload
    }
  },
});

export const { increment, decrement ,incrementIn5} = counterSlice.actions;

export default counterSlice.reducer;
