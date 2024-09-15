import { createContext, useState } from "react";


export const AuthContex = createContext();


const AuthProvider=({children})=>{
    const [user, setuser] = useState(null)

  return(
    <AuthContex.Provider value={user} >
        {children}
    </AuthContex.Provider>
)  
}

export default AuthProvider;

