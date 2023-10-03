import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { CartType } from '../types'

// Define a type for the slice state
interface AppState {
  orders: CartType[]
}

// CartPayload
type CartPayload = {
  count: number
  el: CartType
}

// State
const initialState: AppState = {
  orders: []
}

export const appSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<CartType[]>) => {
      state.orders = action.payload
    },
    setOrder: (state, action: PayloadAction<CartPayload>) => {
      const exists = state.orders.find(el => el.title === action.payload.el.title)
      if (!exists) {
        state.orders = [...state.orders, action.payload.el]
      } else {
        exists.count += action.payload.count
      }
      localStorage.setItem('orders', JSON.stringify(state.orders))
    },
    removeOrder: (state, action: PayloadAction<string>) => {
      state.orders = state.orders.filter(el => el.title !== action.payload)
      localStorage.setItem('orders', JSON.stringify(state.orders))
    }
  },
})

export const { removeOrder, setOrders, setOrder } = appSlice.actions

export default appSlice.reducer