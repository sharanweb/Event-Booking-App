import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({children}) =>{
    const [detail, setDetail] = useState("");
    const [loggedin, setLoggedin] = useState(false);


    return <AuthContext.Provider value={{
        detail, setDetail, loggedin, setLoggedin
    }}>{children}</AuthContext.Provider>
}