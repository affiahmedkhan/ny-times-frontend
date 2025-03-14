'use client';
import React from 'react';
import {AppBar, Toolbar, IconButton, Typography} from '@mui/material';
import SwitchButton from './switch';

const Navbar = () => {
    return (
        <AppBar role="banner" position="fixed" sx={{background: 'transparent', boxShadow: 'none'}}>
            <Toolbar sx={{justifyContent: 'end'}}>
                <SwitchButton />
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
