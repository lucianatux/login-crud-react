import { createContext, useState, useContext, useEffect } from "react";
import { registerRequest, loginRequest, verifyTokenRequest } from "../api/auth";
import Cookies from 'js-cookie';


export const AuthContext = createContext();
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signUp = async (user) => {
        try {
            const res = await registerRequest(user);
            console.log(res.data);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            //console.log(error.response);
            setErrors(error.response.data);
        }   
    }

    const signIn = async (user) => {
        try {
            const res = await loginRequest(user);
            console.log(res);
            console.log(res.data);
            setIsAuthenticated(true);
            setUser(res.data);
        } catch (error) {
            console.log(error.response);
            console.log(error.response.data.message);
            if (Array.isArray(error.response.data)) {
                return setErrors(error.response.data);
            }
            if(error.response.data.message){
                setErrors([error.response.data.message]);
            }else {
                // Si no hay mensaje de error, establecer un mensaje genérico
                setErrors(['An error occurred.']);
              }
        }   
    }  

    const logout =  () => {
        Cookies.remove("token");
        setIsAuthenticated(false);
        setUser(null);
    };

    useEffect(() => {
        if(errors.length > 0){
            const timer = setTimeout(() =>{
                setErrors([]);
            }, 5000)
            return () => clearTimeout(timer);
        }
    },[errors]);

    useEffect(() => {
        async function checkLogin(){
            const cookies = Cookies.get();
            
            if (!cookies.token){
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }   
            try {
                const res = await verifyTokenRequest(cookies.token);
                if(!res.data){
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }
                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                setIsAuthenticated(false);
                setUser(null);
                setLoading(false);
            }   
        }
       checkLogin();
    }, [])

    return (
        <AuthContext.Provider value={{
            signUp, 
            signIn,
            logout,
            loading,
            user, 
            isAuthenticated,
            errors
        }} >
            {children}
        </AuthContext.Provider>
    )
}