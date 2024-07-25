'use client';

import React from 'react';
import Link from 'next/link';
import {Card, CardContent, CardMedia, Chip, Grid, Typography} from '@mui/material';

const ArticleListItem = ({article}) => {
    const mediaUrl =
        article.media && article.media.length > 0
            ? article.media
                  .find((m) =>
                      m['media-metadata'].some((meta) => meta.format === 'mediumThreeByTwo440'),
                  )
                  ?.['media-metadata'].find((meta) => meta.format === 'mediumThreeByTwo440')?.url
            : '';

    return (
        <Link href={`/articles/${article.id}`}>
            <Card
                sx={{
                    cursor: 'pointer',
                    marginBottom: 2,
                    borderRadius: '15px',
                    boxShadow: '0 0 18px 0px #d8d6d6',
                    height: '100%',
                }}
            >
                <CardMedia
                    sx={{
                        background: `url(${mediaUrl})`,
                        height: 293,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                />
                <CardContent>
                    <Typography variant="h5">{article.title}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {article.byline}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Published Date: {new Date(article.published_date).toLocaleDateString()}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        Section: {article.section}
                    </Typography>
                </CardContent>
            </Card>
        </Link>
    );
};

export default ArticleListItem;
