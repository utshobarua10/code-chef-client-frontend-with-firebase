import React, { Children, createContext, useEffect, useState } from 'react';
import app from '../../Firebase/config';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
export const AuthContext = createContext(null)  



const Context = ({children}) => {
    const auth = getAuth(app);
    const [user,setUser] = useState([]);
    const createUser =(email,password)=>{
      
     return createUserWithEmailAndPassword(auth,email,password)
    
    }
    const userUpdateProfile =(person,personName,url) =>{
      return updateProfile(person,{
        displayName: personName,
        photoURL: url
      })

    }

    const signInUser = (email,password)=>{
      return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        return signOut(auth)
    }



  const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle =()=>{
      return signInWithPopup(auth, googleProvider)
    }
  useEffect(()=>{
      const unSubcribe = auth.onAuthStateChanged(profile=>{
        setUser(profile)
      });
      return unSubcribe;


  },[])


 



    const provider = {createUser,signInWithGoogle,signInUser,user,userUpdateProfile,logOut}

    return (
        <AuthContext.Provider value={provider}>
                {children}

        </AuthContext.Provider>
    );
};

export default Context;