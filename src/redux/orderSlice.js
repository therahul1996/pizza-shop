import { createSlice } from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: [],
  reducers: {
    addOrder: (state, action) => {
      const { id, date, status, type, size, base } = action.payload;
      state.push({ id, date, status, type, size, base });
    },
    updateOrderStatus: (state, action) => {
        const { id, newStatus } = action.payload;
        const orderToUpdate = state.find((order) => order.id === id);
        if (orderToUpdate) {
          orderToUpdate.status = newStatus;
        }
      },
      cancelOrder: (state, action) => {
        return state.filter((order) => order.id !== action.payload);
      },
  },
});

export const { addOrder, updateOrderStatus, cancelOrder } = orderSlice.actions;
export default orderSlice.reducer;
