import React from 'react';
import {render, screen} from '@testing-library/react';
import Articles from '@/components/Articles';
import ArticleListItem from '@/components/articleItemList';
import '@testing-library/jest-dom';
import {Grid} from '@mui/material';

jest.mock('@/components/articleItemList', () => ({article}) => (
    <div data-testid="article-list-item">{article.title}</div>
));

describe('Articles Component', () => {
    it('renders nothing if articlesList is empty', () => {
        render(<Articles articlesList={[]} />);
        expect(screen.queryByTestId('article-list-item')).not.toBeInTheDocument();
    });

    it('renders ArticleListItem components for each article', () => {
        const articles = [
            {id: 1, title: 'Article 1'},
            {id: 2, title: 'Article 2'},
        ];

        render(<Articles articlesList={articles} />);

        expect(screen.getAllByTestId('article-list-item')).toHaveLength(articles.length);
        expect(screen.getByText('Article 1')).toBeInTheDocument();
        expect(screen.getByText('Article 2')).toBeInTheDocument();
    });
});
