import { createContext, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "./fairbse";
import { useState } from "react";
export const Authcontext=createContext()
const auth=getAuth(app)
const Authprovider = ({children}) => {
    const[user,setuser]=useState(null)
    const[loading,setloading]=useState(true)


    useEffect(()=>{
    const unsubscribe  =  onAuthStateChanged(auth, currentuser=>{
            setuser(currentuser)
            setloading(false)

        })
        return ()=>{
            return unsubscribe
        }
    },[])


    const singup=(email,password)=>{
        setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
    }

    const login=(email,password)=>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }
    const google=()=>{
        setloading(true)
        return signInWithPopup(auth)
    }

    const logout=()=>{
        setloading(true)
        return signOut(auth)
    }
    const auths={
        singup,
        login,
        google,
        user,
        logout,
        loading
    }
    return (
        <Authcontext.Provider value={auths} >
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;