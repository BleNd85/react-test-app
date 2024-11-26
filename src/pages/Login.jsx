import MyInput from "../components/UI/input/MyInput";
import MyButton from "../components/UI/button/MyButton";
import {useContext} from "react";
import {AuthContext} from "../context/idex";

export default function Login() {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    function login(event) {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth", "true");
    }

    return (
        <div>
            <h1>Login page</h1>
            <form onSubmit={login}>
                <MyInput type={"text"} placeholder="Username"/>
                <MyInput type={"password"} placeholder="Password"/>
                <MyButton>Login</MyButton>
            </form>
        </div>
    )
}