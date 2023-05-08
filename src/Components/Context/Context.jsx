import React, { Children, createContext } from 'react';
import app from '../../Firebase/config';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
export const AuthContext = createContext(null)  



const Context = ({children}) => {
    const auth = getAuth(app);
    
    const createUser =(email,password)=>{
      createUserWithEmailAndPassword(auth,email,password)

    }


    const provider = {createUser}

    return (
        <AuthContext.Provider value={provider}>
                {children}

        </AuthContext.Provider>
    );
};

export default Context;