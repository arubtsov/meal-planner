import { useState, MouseEvent, useId } from 'react'

import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import Popover from '@mui/material/Popover';

import { CreateIngredientForm } from './create-ingredient-form'

export function CreateIngredientButton() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const isOpen = Boolean(anchorEl);
    const id = useId()
    const popoverId = isOpen ? id : undefined;

    return (
        <>
            <Fab color="primary" aria-label="add" aria-describedby={popoverId} onClick={handleClick}>
                <AddIcon />
            </Fab>
            <Popover
                id={popoverId}
                open={isOpen}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'center',
                    horizontal: 'center',
                }}
                >
                <CreateIngredientForm isActive={isOpen} close={handleClose} />
            </Popover>
        </>
    )
}
