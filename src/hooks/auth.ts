import {RootState} from "../store";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export function useAuth() {
    const token = useSelector((state: RootState) => state.auth.token);

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    console.log("token", token);
    useEffect(() => {
        if (token.accessToken) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [token])

    return {
        isAuthenticated,
    }
}