import { createContext, useState } from "react";


export const AuthContex = createContext();


const AuthProvider=({children})=>{
    const [user, setuser] = useState(null)

    const login = (info)=>{
        setuser(info)
    }

  return(
    <AuthContex.Provider value={{user, login}} >
        {children}
    </AuthContex.Provider>
)  
}

export default AuthProvider;

