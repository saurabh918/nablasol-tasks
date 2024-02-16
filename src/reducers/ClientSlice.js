import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  clients: ["client1","client2","client3"]
}

export const ClientSlice = createSlice({
  name: "clients",
  initialState,
  reducers: {
    addClient: (state,action) => {
      return {
        ...state,
        clients: [...state.clients, action.payload]
      }
    }
  }
})

export const {addClient} = ClientSlice.actions
export default ClientSlice.reducer