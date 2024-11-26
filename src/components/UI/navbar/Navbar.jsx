import MyButton from "../button/MyButton";
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css"

export default function Navbar() {
    return (
        <div className={classes.navbar}>
            <MyButton>
                <Link to="/about">About</Link>
            </MyButton>
            <MyButton>
                <Link to="/posts">Posts</Link>
            </MyButton>
        </div>
    )
}