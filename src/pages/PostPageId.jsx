import React, {useEffect, useState} from 'react';
import useFetching from "../components/hooks/useFetching";
import {useParams} from "react-router-dom";
import {PostService} from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

export default function PostPageId() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getPostById(id);
        setPost(response.data);
    })


    useEffect(() => {
        fetchPostById(params.id)
    }, []);
    return (
        <div>
            <h1>Post</h1>
            {isLoading
                ? <Loader/>
                : <div>{post.id}. {post.title}</div>}
        </div>
    );
}
