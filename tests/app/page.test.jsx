import React from 'react';
import {render, screen, fireEvent, waitFor} from '@testing-library/react';
import Home from '@/app/page';
import {fetchArticles} from '@/utils/api';
import {SwitchProvider} from '@/context/switchBtnContext';
import '@testing-library/jest-dom';
import Image from 'next/image';

jest.mock('@/utils/api', () => ({
    fetchArticles: jest.fn(),
}));

jest.mock('@/assets/images/NewYorkTimes.svg', () => 'svg-mock');
jest.mock('@/assets/images/NewYorkTimes-white.svg', () => 'svg-mock');

jest.mock('next/image', () => (props) => <img {...props} alt={props.alt || 'mock image'} />);

describe('Home Page', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    });

    it('fetches and displays articles based on selected period', async () => {
        const articles = [{id: 1, title: 'Test Article'}];
        fetchArticles.mockResolvedValueOnce(articles);

        render(
            <SwitchProvider>
                <Home />
            </SwitchProvider>,
        );

        expect(screen.getByRole('img', {alt: /New York Times/i})).toBeInTheDocument();

        await waitFor(() => {
            expect(screen.getByText('Test Article')).toBeInTheDocument();
        });
    });
});
