import { createContext, useState } from "react";

export const AuthContext = createContext();
export const AuthContextProvider = ({children}) =>{
    const [detail, setDetail] = useState("");


    return <AuthContext.Provider value={{
        detail, setDetail
    }}>{children}</AuthContext.Provider>
}