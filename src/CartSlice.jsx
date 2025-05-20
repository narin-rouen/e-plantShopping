import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    },
    reducers: {
        addItem: (state, action) => {
            const plant = action.payload;
            const existing = state.items.find(item => item.name === plant.name);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({ ...plant, quantity: 1 });
            }
        },
        removeItem: (state, action) => {
            const name = action.payload;
            state.items = state.items.filter(item => item.name !== name);
        },
        updateQuantity: (state, action) => {
            const { name, amount } = action.payload;
            const item = state.items.find(item => item.name === name);
            if (item) {
                item.quantity = amount;
            }
        }
    }
});

export const { addItem, removeItem, updateQuantity } = cartSlice.actions;
export default cartSlice.reducer;
