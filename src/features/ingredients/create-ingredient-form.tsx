import { useId, useRef, useEffect } from 'react'
import { useForm } from 'react-hook-form';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import { IngredientType, PortionType, Ingredient } from './ingredients-slice'
import { useIngredientCreator } from './hooks'

interface Props {
    isActive: boolean
    close: () => void
}

export function CreateIngredientForm({ isActive, close }: Props) {
    const typeLabelId = useId()
    const defaultUnitsLabelId = useId()
    const nameInputRef = useRef<HTMLInputElement | null>(null)
    const createIngredient = useIngredientCreator()
    const { register, handleSubmit } = useForm<Ingredient>();

    useEffect(() => {
        if (isActive && nameInputRef.current) {
            nameInputRef.current.focus()
        }
    }, [isActive])

    function onSubmit(ingredient: Ingredient) {
        createIngredient(ingredient)

        close()
    }

    return (
        <Card component="form" autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <CardContent>
                <Typography variant="h6" component="div">
                    New Ingredient
                </Typography>
                <Stack spacing={2}>
                    <TextField
                        label="Name"
                        size="small"
                        variant="standard"
                        inputRef={nameInputRef}
                        {...register('name', { required: true })}
                        required
                    />
                    <FormControl variant="standard">
                        <InputLabel id={typeLabelId}>Type</InputLabel>
                        <Select
                            labelId={typeLabelId}
                            label="Type"
                            {...register('type', { required: true })}
                            required
                        >
                            {Object.values(IngredientType).map(type =>
                                <MenuItem key={type} value={type}>{type}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                    <FormControl variant="standard">
                        <InputLabel id={defaultUnitsLabelId}>Default portion type</InputLabel>
                        <Select
                            id="default-portion-type"
                            labelId={defaultUnitsLabelId}
                            label="Default portion type"
                            defaultValue={PortionType.Gram}
                            {...register('defaultPortion')}
                        >
                            {Object.values(PortionType).map(type =>
                                <MenuItem key={type} value={type}>{type}</MenuItem>
                            )}
                        </Select>
                    </FormControl>
                </Stack>
            </CardContent>
            <CardActions>
                <Button size="small" sx={{ ml: 'auto' }} onClick={close}>Cancel</Button>
                <Button size="small" variant="contained" disableElevation type="submit">Create</Button>
            </CardActions>
        </Card>
    )
}
