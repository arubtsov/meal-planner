import { Ingredient } from '.'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

export function IngredientItem({ name, type, defaultPortion }: Ingredient) {
    return (
        <Card>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Stack direction="row" spacing={1}>
                    <Chip variant="outlined" size="small" label={type} />
                    <Chip variant="outlined" size="small" label={defaultPortion} />
                </Stack>
            </CardContent>
        </Card>
    )
}
