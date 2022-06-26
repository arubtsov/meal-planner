import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

export enum IngredientType {
    Vegetables = 'Vegetables',
    Fruits = 'Fruits',
    Meat = 'Meat',
    Fish = 'Fish',
    Spices = 'Spices',
    Greens = 'Greens',
    Herbs = 'Herbs',
    MilkProducts = 'Milk Products',
    Eggs = 'Eggs',
    Fats = 'Fats',
    BakingProducts = 'Baking Products',
    Nuts = 'Nuts',
    Pasta = 'Pasta',
    Grains = 'Grains',
    Other = 'Other',
    Bread = 'Bread',
    Pulses = 'Pulses',
}

export enum PortionType {
    Piece = 'Piece',
    Gram = 'Gram',
    TableSpoon = 'Table spoon',
    TeaSpoon = 'Tea spoon',
    Cup = 'Cup',
}

export interface Ingredient {
    name: string
    type: IngredientType
}

interface IngredientsState {
    list: Ingredient[]
}

// Define the initial state using that type
const initialState: IngredientsState = {
    list: [],
}

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredient(state, action: PayloadAction<Ingredient>) {
      state.list.push(action.payload)
    },
    deleteIngredient(state, action: PayloadAction<string>) {
        state.list = state.list.filter(ingredient => ingredient.name !== action.payload)
    }
  },
})

export const { addIngredient, deleteIngredient } = ingredientsSlice.actions

export const selectIngredients = (state: RootState) => state.ingredients.list

export default ingredientsSlice.reducer
