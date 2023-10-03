import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../Firebase/firebase.config";


export const AuthContext = createContext(null);

const providerGoogle = new GoogleAuthProvider();


// authentication component // 
const AuthProvider = ({children}) => {

const [user, setUser] = useState({});

const [loading, setLoading] = useState(true);

const googleProvider = () => {
   setLoading(true);
   return signInWithPopup( auth , providerGoogle)
}

const createRegister = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);

}

const userSignIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);

}


const userUpdate = (name, photo) => {
   return updateProfile(auth.currentUser, {

    displayName: name, photoURL: photo

   })
} 


// user logout // 
const userLogout = () => {
    return signOut(auth)
}


// useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//         setUser(user)
//       });
// },[])

// console.log(user);

useEffect(() => {
   const unSubscribe = onAuthStateChanged(auth, (user) => {
    setUser(user)
    setLoading(false);
   });

   return () => {
    unSubscribe()
   }

},[])


const authInfo = {user, googleProvider, createRegister, userSignIn, userLogout, loading, userUpdate};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children : PropTypes.node
}