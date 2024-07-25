'use client';
import '../styles/globals.css';
import {CssBaseline, ThemeProvider} from '@mui/material';
import {useEffect, useMemo} from 'react';
import Navbar from '../components/Navbar';
import {SwitchProvider, useSwitch} from '../context/switchContext';
import {lightTheme, darkTheme} from '../styles/theme';

function AppLayout({children}) {
    return (
        <ThemeWrapper>
            <CssBaseline />
            <Navbar />
            {children}
        </ThemeWrapper>
    );
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>
                <SwitchProvider>
                    <AppLayout>{children}</AppLayout>
                </SwitchProvider>
            </body>
        </html>
    );
}

function ThemeWrapper({children}) {
    const {checked} = useSwitch();

    const theme = useMemo(() => (checked ? lightTheme : darkTheme), [checked]);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', checked ? 'light' : 'dark');
    }, [checked]);

    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
