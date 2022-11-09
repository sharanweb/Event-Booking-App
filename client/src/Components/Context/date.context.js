import { createContext, useState } from "react";

export const DateContext = createContext();
export const DateContextProvider = ({children}) =>{
    const [cdate, setCdate] = useState("");


    return <DateContext.Provider value={{
        cdate, setCdate
    }}>{children}</DateContext.Provider>
}