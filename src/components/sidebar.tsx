import List from '@mui/material/List';
import { SidebarLink } from './sidebar-link';
import ScienceIcon from '@mui/icons-material/Science';
import BlenderIcon from '@mui/icons-material/Blender';

export function Sidebar() {
    return (
        <List>
            <SidebarLink to='/recepies' text='Recepies' icon={<BlenderIcon color="secondary" />} />
            <SidebarLink to='/ingredients' text='Ingredients' icon={<ScienceIcon color="secondary" />} />
        </List>
    )
}
