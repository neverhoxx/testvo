import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], // массив товаров в корзине
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.items.push({
                ...action.payload,
                quantity: 1,
            });
        },
        incrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                item.quantity += 1;
            }
        },
        decrementQuantity: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item && item.quantity > 1) {
                item.quantity -= 1;
            }
        },
        removeFromCart: (state, action) => {
            state.items = state.items.filter((item) => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
        setQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item && quantity >= 1) {
                item.quantity = quantity;
            }
        }

    },
});

export const { addToCart, incrementQuantity, decrementQuantity, removeFromCart, clearCart, setQuantity } = cartSlice.actions;

export default cartSlice.reducer;
