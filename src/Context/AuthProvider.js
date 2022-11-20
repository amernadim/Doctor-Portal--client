import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth';
import app from '../Firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({children}) => {
  
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const createUser = (email, password) =>{
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
  }

  const signIn = (email, password) =>{
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
  }

  const updateUser = (userInfo) =>{
      return updateProfile(auth.currentUser, userInfo);
  }

  const logOut = () =>{
      localStorage.removeItem('accessToken')
      setLoading(true);
      return signOut(auth);
  }

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider)
  }

  const forgetPass = (email) => {
   return sendPasswordResetEmail(auth, email)
  }

  useEffect( () =>{
    const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        // console.log('user observing');
        setLoading(false);
        setUser(currentUser);
    });

    return () => unsubscribe();
}, [])

  const authInfo = {
      createUser,
      signIn,
      updateUser,
      logOut,
      googleSignIn,
      forgetPass,
      user,
      loading
  }

  return (
    <div>
      <AuthContext.Provider value={authInfo} >
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;