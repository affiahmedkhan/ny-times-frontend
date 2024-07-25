'use client';

import {AppBar, Toolbar, IconButton, Typography} from '@mui/material';
import SwitchButton from './switchButton/Switch';
import {useSwitch} from '@/context/switchContext';

const Navbar = () => {
    return (
        <AppBar position="fixed" sx={{background: 'transparent', boxShadow: 'none'}}>
            <Toolbar sx={{justifyContent: 'end'}}>
                <SwitchButton />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
