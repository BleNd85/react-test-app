import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";


export default function PostForm({create}) {
    const [post, setPost] = useState({title: "", body: ""});

    function createPost(e) {
        e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost);
        setPost({title: "", body: ""});
    }

    return (
        <form>
            {/*Controlled component*/}
            <MyInput value={post.title} onChange={(event) => setPost({...post, title: event.target.value})}
                     type="text"
                     placeholder="Post name"/>
            <MyInput value={post.body}
                     onChange={(event) => setPost({...post, body: event.target.value})}
                     type="text"
                     placeholder="Post description"/>
            <MyButton onClick={createPost}>Create</MyButton>

        </form>
    );
}
