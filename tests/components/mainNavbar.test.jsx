import React from 'react';
import {render, screen} from '@testing-library/react';
import Navbar from '@/components/mainNavbar';
import {SwitchProvider} from '@/context/switchBtnContext';
import '@testing-library/jest-dom';

jest.mock('@/assets/images/starsIcon.svg', () => 'svg-mock');
jest.mock('@/assets/images/MoonIcon.svg', () => 'svg-mock');

describe('Navbar Component', () => {
    it('renders the AppBar with SwitchButton', () => {
        render(
            <SwitchProvider>
                <Navbar />
            </SwitchProvider>,
        );

        const appBar = screen.getByRole('banner');
        expect(appBar).toBeInTheDocument();

        const switchButton = screen.getByRole('switch');
        expect(switchButton).toBeInTheDocument();
    });
});
