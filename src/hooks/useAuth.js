import { useContext } from "react";
import AuthContext from "../contexts/auth-context.jsx";

export function useAuth() {
    return useContext(AuthContext);
}