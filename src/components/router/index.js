import Posts from "../../pages/Posts";
import PostPageId from "../../pages/PostPageId";
import About from "../../pages/About";
import Login from "../../pages/Login";
import Error from "../../pages/Error";

export const privateRoutes = [
    {path: "/posts", element: <Posts/>, exact: true},
    {path: "/about", element: <About/>, exact: true},
    {path: "/posts/:id", element: <PostPageId/>, exact: true},
    {path: "*", element: <Posts/>, exact: true},
]

export const publicRoutes = [
    {path: "/login", element: <Login/>, exact: true},
    {path: "*", element: <Login/>, exact: true},
]