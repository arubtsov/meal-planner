import React, { ReactNode } from 'react'
import { NavLink as RouterLink, useResolvedPath, useMatch } from 'react-router-dom';

import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

interface Props {
    to: string
    text: string
    icon: ReactNode
}

export function SidebarLink({ to, text, icon }: Props) {
    const resolved = useResolvedPath(to);
    const match = useMatch({ path: resolved.pathname, end: true });
    const isActive = Boolean(match)

    return (
        <li>
            <ListItem disablePadding component={RouterLink} to={to}>
                <ListItemButton selected={isActive}>
                    <ListItemIcon>
                        {icon}
                    </ListItemIcon>
                <ListItemText primary={text} />
                </ListItemButton>
            </ListItem>
        </li>
    )
}
