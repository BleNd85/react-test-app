import {useMemo} from "react";

export function useSortedPosts(posts, sort) {
    return useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);
}

export function useSortedAndSearchedPosts(posts, sort, query) {
    const sortedPosts = useSortedPosts(posts, sort);
    return useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts]);
}