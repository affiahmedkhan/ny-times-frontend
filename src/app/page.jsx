'use client';

import {useEffect, useState} from 'react';
import {fetchArticles} from '../utils/api';
import {
    Box,
    Container,
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    Typography,
} from '@mui/material';
import Articles from '../components/Articles';
import Image from 'next/image';
import nyLogo from '../assets/images/NewYorkTimes.svg';
import nyLogoWhite from '../assets/images/NewYorkTimes-white.svg';
import {useSwitch} from '../context/switchContext';

export default function Home() {
    const [articles, setArticles] = useState([]);
    const [period, setPeriod] = useState('1');
    const {checked} = useSwitch();

    useEffect(() => {
        const getArticles = async () => {
            try {
                const data = await fetchArticles(period);
                localStorage.setItem('articles', JSON.stringify(data));
                setArticles(data);
            } catch (err) {
                console.log('Failed to fetch articles');
            }
        };

        getArticles();
    }, [period]);

    const handlePeriodChange = (event) => {
        setPeriod(event.target.value);
    };

    return (
        <Container>
            <Box
                sx={{
                    textAlign: 'center',
                    m: '35px',
                }}
            >
                <Image
                    src={checked ? nyLogoWhite : nyLogo}
                    alt="New York Times"
                    height={50}
                    priority
                />
            </Box>
            <FormControl sx={{mb: 3}}>
                <InputLabel id="period-select-label">Period</InputLabel>
                <Select
                    labelId="period-select-label"
                    id="period-select"
                    value={period}
                    label="Period"
                    onChange={handlePeriodChange}
                >
                    <MenuItem value="1">1 Day</MenuItem>
                    <MenuItem value="7">7 Days</MenuItem>
                    <MenuItem value="30">30 Days</MenuItem>
                </Select>
            </FormControl>
            <Grid container spacing={3}>
                <Articles articlesList={articles} />
            </Grid>
        </Container>
    );
}
