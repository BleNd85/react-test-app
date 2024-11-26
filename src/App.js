import "./styles/App.css"
import {BrowserRouter} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";
import AppRouter from "./components/AppRouter";
import {AuthContext} from "./context/idex";
import {useEffect, useState} from "react";

export default function App() {
    const [isAuth, setIsAuth] = useState(false);
    const [isAuthLoading, setIsAuthLoading] = useState(true);
    useEffect(() => {
        if (localStorage.getItem("auth")) {
            setIsAuth(true);
        }
        setIsAuthLoading(false);
    }, [])

    return (
        <AuthContext.Provider value={{
            isAuth, setIsAuth, isAuthLoading
        }}>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>

    )
}
