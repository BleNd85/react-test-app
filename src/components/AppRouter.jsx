import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostPageId from "../pages/PostPageId";

export default function AppRouter() {
    return (
        <Routes>
            <Route path="/about" element={<About/>}/>
            <Route exact path="/posts" element={<Posts/>}/>
            <Route exact path="/posts/:id" element={<PostPageId/>}></Route>
            <Route path="*" element={<Error/>}></Route>
        </Routes>
    );
}
