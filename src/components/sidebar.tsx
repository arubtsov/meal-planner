import List from '@mui/material/List';
import { SidebarLink } from './sidebar-link';
import ScienceIcon from '@mui/icons-material/Science';

export function Sidebar() {
    return (
        <List>
            <SidebarLink to='/ingredients' text='Ingredients' icon={<ScienceIcon color="secondary" />} />
        </List>
    )
}
