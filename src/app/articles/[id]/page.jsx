'use client';

import React, {useEffect, useState} from 'react';
import {Container, Typography, Chip, Grid, Box} from '@mui/material';
import Image from 'next/image';
import nyLogo from '@/assets/images/NewYorkTimes.svg';
import nyLogoWhite from '@/assets/images/NewYorkTimes-white.svg';
import {useSwitch} from '@/context/switchBtnContext';

const ArticleDetail = ({params}) => {
    const {id} = params;
    const [article, setArticle] = useState(null);
    const [error, setError] = useState(null);
    const {checked} = useSwitch();

    useEffect(() => {
        const getArticle = async () => {
            try {
                const storedArticles = JSON.parse(localStorage.getItem('articles')) || [];
                const selectedArticle = storedArticles.find((article) => article.id == id);
                setArticle(selectedArticle);
            } catch (err) {
                setError('Failed to fetch article');
            }
        };
        getArticle();
    }, [id]);

    if (error) {
        return (
            <Container>
                <Typography variant="h6" color="error">
                    {error}
                </Typography>
            </Container>
        );
    }

    if (!article) {
        return (
            <Container>
                <Typography variant="h6">Loading...</Typography>
            </Container>
        );
    }

    const mediaUrl =
        article?.media && article?.media.length > 0
            ? article?.media
                  .find((m) =>
                      m['media-metadata'].some((meta) => meta.format === 'mediumThreeByTwo440'),
                  )
                  ?.['media-metadata'].find((meta) => meta.format === 'mediumThreeByTwo440')?.url
            : '';

    return (
        <Container sx={{my: 10}}>
            <Box
                sx={{
                    textAlign: 'center',
                    mb: '35px',
                }}
            >
                <Image
                    src={checked ? nyLogoWhite : nyLogo}
                    alt="New York Times"
                    width={300}
                />
            </Box>
            <Grid container spacing={2} direction="column" alignItems="center">
                {mediaUrl && (
                    <Grid item>
                        <Image
                            src={mediaUrl}
                            alt={article.title}
                            width={320}
                            height={200}
                        />
                    </Grid>
                )}
                <Grid item>
                    <Typography variant="h3" sx={{textAlign: 'center', sm: {fontSize: '18px'}}}>
                        {article.title}
                    </Typography>
                </Grid>
                <Grid item alignSelf={'flex-start'} width={'100%'}>
                    <Grid container spacing={1}>
                        <Grid item>
                            <Chip label={article.byline} />
                        </Grid>{' '}
                        <Grid item>
                            <Chip label={new Date(article.published_date).toLocaleDateString()} />
                        </Grid>
                        <Grid item>
                            <Chip label={article.section} />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid alignSelf={'flex-start'} width={'100%'} item>
                    <Typography component="p" sx={{textAlign: 'justify'}}>
                        {article.abstract}
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ArticleDetail;
