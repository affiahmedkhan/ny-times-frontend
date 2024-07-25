import axiosInstance from './axiosInstance';
export const fetchArticles = async (period = '1') => {
    try {
        const API_KEY = process.env.NEXT_PUBLIC_NY_TIMES_API_KEY;
        const response = await axiosInstance.get(`viewed/${period}.json`, {
            params: {'api-key': API_KEY},
        });
        return response.data.results;
    } catch (error) {
        console.error('Error fetching articles:', error);
        throw new Error('Failed to fetch articles');
    }
};
