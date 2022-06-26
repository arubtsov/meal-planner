import Grid from '@mui/material/Grid';

import { useIngredients } from '../features/ingredients'
import { CreateIngredientButton, IngredientItem } from '../features/ingredients'

export function Ingredients() {
    const ingredientsList = useIngredients()

    return (
        <Grid container spacing={5}>
            <Grid item my="auto">
                <CreateIngredientButton />
            </Grid>
            {ingredientsList.map(ingredient =>
                <Grid item><IngredientItem key={ingredient.name} {...ingredient}/></Grid>
            )}
        </Grid>
    )
}
