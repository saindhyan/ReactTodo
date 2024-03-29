import { createContext, useContext, useState } from "react";

export const AuthContext=createContext()

export const useAuth=
()=>useContext(AuthContext)

export default  function AuthProvider({children}){
    const [username,setUsername]=useState({})
    const [isAuthenticated,setIsAuthenticated]=useState(false)
    function Login(username,password){
        if(username==='piyush@abc' && password==='123'){
            setIsAuthenticated(true)
            setUsername(username)
            return true
 
        }else{
            setIsAuthenticated(false)
            setUsername(null)
            return false;       


        }
    

    } 
    function logout(){
        setIsAuthenticated(false);
        setUsername(null)

    }
    return(
        <AuthContext.Provider value={{isAuthenticated,Login,logout,username }}>
            {children}
            </AuthContext.Provider>
    )
}