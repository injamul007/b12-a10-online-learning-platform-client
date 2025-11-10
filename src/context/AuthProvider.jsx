import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)

  const createUserFunc = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
  }

  const updateProfileFunc = (displayName,photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL
    })
  }

  const loginUserFunc = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
  }

  const logOutUserFunc = () => {
    setLoading(true)
    return signOut(auth)
  }

  const googleSignInFunc = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => {
      unsubscribe();
    }
  },[]);


  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUserFunc,
    updateProfileFunc,
    loginUserFunc,
    logOutUserFunc,
    googleSignInFunc
  }

  return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;