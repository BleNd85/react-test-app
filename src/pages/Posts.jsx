import React, {useEffect, useRef, useState} from "react";
import "../styles/App.css"
import PostList from "../components/PostList";
import PostForm from "../components/PostForm";
import PostFilter from "../components/PostFilter";
import MyModal from "../components/UI/modal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import {useSortedAndSearchedPosts} from "../components/hooks/usePosts";
import {PostService} from "../API/PostService";
import Loader from "../components/UI/loader/Loader";
import UseFetching from "../components/hooks/useFetching";
import getPageCount from "../utils/pages";
import MyPagination from "../components/UI/pagination/MyPagination";
import useObserver from "../components/hooks/useObserver";
import MySelect from "../components/MySelect";

export default function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({sort: "", query: ""});
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = useSortedAndSearchedPosts(posts, filter.sort, filter.query);
    const lastElement = useRef();

    const [fetchPosts, isPostsLoading, postsError] = UseFetching(async (limit, page) => {
        const response = await PostService.getAllPosts(limit, page);
        setPosts([...posts, ...response.data]);
        const totalCount = response.headers["x-total-count"]
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1);
    });

    useEffect(() => {
        fetchPosts(limit, page);
    }, [page, limit])

    function createPost(newPost) {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    function removePost(post) {
        setPosts(posts.filter((p) => p.id !== post.id));
    }

    function changePage(page) {
        setPage(page);
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
            <MySelect
                value={limit}
                onChange={limit => setLimit(limit)}
                defaultValue={"Amount of elements"}
                options={[
                    {value: 5, name: "5"},
                    {value: 10, name: "10"},
                    {value: 25, name: "25"},
                    {value: -1, name: "All"}
                ]}/>
            {postsError &&
                <h1>Error {postsError}</h1>}
            {isPostsLoading &&
                <Loader/>
            }
            <PostList posts={sortedAndSearchedPosts} title={"Title"} remove={removePost}/>
            <div ref={lastElement}></div>
            <MyPagination
                totalPages={totalPages}
                page={page}
                changePage={changePage}/>
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
