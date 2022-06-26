import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export interface Recepie {
    id: string
    name: string
}

interface RecepiesState {
    list: Recepie[]
}

const initialState: RecepiesState = {
    list: [],
}

export const recepiesSlice = createSlice({
    name: 'recepies',
    initialState,
    reducers: {
      addRecepie(state, action: PayloadAction<Recepie>) {
        state.list.push(action.payload)
      },
      deleteRecepie(state, action: PayloadAction<string>) {
          state.list = state.list.filter(recepie => recepie.id !== action.payload)
      }
    },
})

export const { addRecepie, deleteRecepie } = recepiesSlice.actions

export const selectRecepies = (state: RootState) => state.recepies.list

export default recepiesSlice.reducer
