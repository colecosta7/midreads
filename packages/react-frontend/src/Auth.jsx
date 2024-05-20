import React, { useContext, useState, useEffect } from 'react'
import {auth} from "./firebase"

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}


const AuthProvider = ({children}) => {
    const[currentUser, setCurrentUser] = useState()
    const provider = new GoogleAuthProvider(); //?

    
    useEffect(() => {
        const promise = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
        })
        return promise
    },[])

    return(
        <AuthContext.Provider currentUser>
        </AuthContext.Provider>
    )
}

export default AuthProvider