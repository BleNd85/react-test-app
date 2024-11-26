import React, {useEffect, useState} from 'react';
import useFetching from "../components/hooks/useFetching";
import {useParams} from "react-router-dom";
import {PostService} from "../API/PostService";
import Loader from "../components/UI/loader/Loader";

export default function PostPageId() {
    const params = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading, error] = useFetching(async (id) => {
        const response = await PostService.getPostById(id);
        setPost(response.data);
    })
    const [fetchCommentsByPostId, commentsIsLoading, commentsError] = useFetching(async (id) => {
        const response = await PostService.getCommentsByPostId(id);
        setComments(response.data);
    })


    useEffect(() => {
        fetchPostById(params.id)
        fetchCommentsByPostId(params.id)
    }, []);

    return (
        <div>
            <h1>Post #{params.id}</h1>
            {isLoading
                ? <Loader/>
                : <div>
                    <div>
                        {post.title}
                    </div>
                    <div>
                        {post.body}
                    </div>
                </div>
            }
            <h2>Comments</h2>
            {commentsIsLoading
            ? <Loader/>
            : <div>
                    {comments.map(comment =>
                    <div style={{marginTop: "1rem"}}>
                        <h5>{comment.email}</h5>
                        <div>{comment.body}</div>
                    </div>)}
                </div>}
        </div>
    );
}
