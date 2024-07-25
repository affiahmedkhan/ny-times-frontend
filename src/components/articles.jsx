'use client';

import React from 'react';
import {Grid} from '@mui/material';
import ArticleListItem from './articleListItem';

const Articles = ({articlesList}) => {
    if (!articlesList || !articlesList.length) {
        return null;
    }

    return (
        <>
            {articlesList.map((article) => (
                <Grid item xs={12} sm={6} key={article.id}>
                    <ArticleListItem article={article} />
                </Grid>
            ))}
        </>
    );
};

export default Articles;
