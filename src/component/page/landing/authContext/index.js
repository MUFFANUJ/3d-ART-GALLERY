import React,{ useContext,useState,useEffect } from "react";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth(){
  return useContext(AuthContext);
}

export function AuthProvider({children}) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoogedIn] = useState(false);
  const [ loading, setLoading] = useState(true);

  
  async function inittializeUser(user){
    if(user){
      setCurrentUser({...user});
      setUserLoogedIn(true);
    } else{
      setCurrentUser(null);
      setUserLoogedIn(false);
    }
    setLoading(false);
  }
  useEffect (() => {
    const unsubscribe = onAuthStateChanged(auth, inittializeUser);
    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    userLoggedIn,
    loading
  }
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}