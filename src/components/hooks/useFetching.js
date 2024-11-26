import {useState} from 'react';

export default function UseFetching(callback) {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    async function fetchPosts(...args) {
        try {
            setIsLoading(true);
            await callback(...args);
        } catch (error) {
            setIsError(error.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetchPosts, isLoading, isError];
}

