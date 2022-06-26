import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIngredient, Ingredient, selectIngredients } from './ingredients-slice'

export const useIngredients = () => useSelector(selectIngredients)
export function useIngredientCreator() {
    const dispatch = useDispatch()

    return useCallback(
        (ingredient: Ingredient) => dispatch(addIngredient(ingredient)),
        [dispatch]
    )
}
