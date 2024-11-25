import React, {useEffect, useMemo, useRef, useState} from "react";
import "./styles/App.css"
import PostList from "./components/PostList";

import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import {useSortedAndSearchedPosts} from "./components/hooks/usePosts";
import axios from "axios";
import {PostService} from "./API/PostService";
import Loader from "./components/UI/loader/Loader";

export default function App() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: "", query: ""});
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = useSortedAndSearchedPosts(posts, filter.sort, filter.query);
    const [isPostsLoading, setIsPostsLoading] = useState(false);

    useEffect(() => {
        fetchPosts();
    }, [])

    function createPost(newPost) {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    async function fetchPosts() {
        setIsPostsLoading(true);
        const posts = await PostService.getAllPosts();
        setPosts(posts);
        setIsPostsLoading(false);
    }

    function removePost(post) {
        setPosts(posts.filter((p) => p.id !== post.id));
    }

    return (
        <div className="App">
            <MyButton onClick={() => setModal(true)}>
                Create Post
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <hr style={{marginTop: "1rem", marginBottom: "1rem"}}/>
            {isPostsLoading
            ? <Loader/>
            :<PostList posts={sortedAndSearchedPosts} title={"Title"} remove={removePost}/>}

        </div>
    )
}

/*
{
    /!*Uncontrolled component*!/
}
    <MyInput ref={descriptionInputRef} value={description}
             onChange={(event) => setDescription(event.target.value)} type="text"
             placeholder="Опис посту"/>
    <MyButton onClick={createPost}>Створити</MyButton>
*/
