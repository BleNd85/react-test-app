import MyButton from "../button/MyButton";
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css"
import {useContext} from "react";
import {AuthContext} from "../../../context/idex";

export default function Navbar() {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    function logout() {
        setIsAuth(false);
        localStorage.removeItem("auth");
    }

    return (
        <div className={classes.navbar}>
            <MyButton onClick={logout}>Log out</MyButton>
            <MyButton>
                <Link to="/about">About</Link>
            </MyButton>
            <MyButton>
                <Link to="/posts">Posts</Link>
            </MyButton>
        </div>
    )
}