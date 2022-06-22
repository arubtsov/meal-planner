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
    Piece = 'piece',
    Gram = 'gram',
    TableSpoon = 'table spoon',
    TeaSpoon = 'tea spoon',
    Cup = 'cup',
}

export interface Ingredient {
    id: string
    name: string
    description: string
    type: IngredientType
}

interface IngredientsState {
    ingredients: Ingredient[]
}

// Define the initial state using that type
const initialState: IngredientsState = {
    ingredients: [],
}

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  reducers: {
    addIngredient(state, action: PayloadAction<Ingredient>) {
      state.ingredients.push(action.payload)
    },
    deleteIngredient(state, action: PayloadAction<string>) {
        state.ingredients = state.ingredients.filter(ingredient => ingredient.id !== action.payload)
    }
  },
})

export const { addIngredient, deleteIngredient } = ingredientsSlice.actions

export const selectIngredients = (state: RootState) => state.ingredients.ingredients

export default ingredientsSlice.reducer
