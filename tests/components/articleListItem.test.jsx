import React from 'react';
import {render, screen} from '@testing-library/react';
import ArticleListItem from '@/components/articleItemList';

describe('ArticleListItem', () => {
    const article = {
        id: 1,
        title: 'Test Article',
        byline: 'Author Name',
        published_date: '7/24/2024',
        section: 'Science',
        abstract: 'This is a test article abstract.',
        media: [
            {
                'media-metadata': [
                    {format: 'mediumThreeByTwo440', url: 'http://example.com/image.jpg'},
                ],
            },
        ],
    };

    it('renders article details correctly', () => {
        render(<ArticleListItem article={article} />);

        expect(screen.getByText('Test Article')).toBeInTheDocument();
        expect(screen.getByText('Author Name')).toBeInTheDocument();
        expect(screen.getByText('7/24/2024')).toBeInTheDocument();
        expect(screen.getByText('Science')).toBeInTheDocument();
    });

    it('displays article image', () => {
        render(<ArticleListItem article={article} />);

        const img = screen.getByRole('img');
        expect(img).toHaveAttribute('src', 'http://example.com/image.jpg');
    });
});
