import React, { createContext } from 'react';
import useFirebase from '../components/Hooks/useFirebase';


export const Authcontext=createContext();

const AuthProvider = ({children}) => {

    const allcontexts=useFirebase();

    
    return (
        <Authcontext.Provider value={allcontexts}>
         {children}
        </Authcontext.Provider>
    );
};

export default AuthProvider;