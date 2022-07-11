import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  itemsInStock: [
    {
      description: "blue pen",
      costInPence: 100,
      numberInStock: 200,
      _id: "123",
    },
    {
      description: "red pen",
      costInPence: 120,
      numberInStock: 150,
      _id: "234",
    },
    {
      description: "alarm clock",
      costInPence: 500,
      numberInStock: 20,
      _id: "345",
    },
  ],
  itemsInBasket: [
    {
      description: "alarm clock",
      costInPence: 500,
      numberInBasket: 1,
      _id: "345",
    },
  ],
};

export const shopStockSlice = createSlice({
  name: "shopStock",
  initialState,
  reducers: {
    addToBasket: (state) => {
      state.itemsInStock = state.itemsInStock;
      state.itemsInBasket = [...state.itemsInBasket];
    },
    removeFromBasket: (state) => {
      state.itemsInStock = state.itemsInStock;
      state.itemsInBasket = [...state.itemsInBasket];
    },
  },
});

export const { addToBasket, removeFromBasket } = shopStockSlice.actions;

export const shopStock = (state) => state.shopStock;

export default shopStockSlice.reducer;
