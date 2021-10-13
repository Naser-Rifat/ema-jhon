import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged,signOut } from "firebase/auth";
import initializeAuthentication from "../../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase=()=>{
    const auth=getAuth();
   const googleAuthProvider =new GoogleAuthProvider();

    const [ user ,setUser]=useState({});

    const GoogleSignIn=()=>{
       return signInWithPopup(auth,googleAuthProvider);
       
    }

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user);
            }

        });
    },[]);

    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            setUser({})

        })
    }

    return{
        user,
        GoogleSignIn,
        logOut
    }


}

export default useFirebase;