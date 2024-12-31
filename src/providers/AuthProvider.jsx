import React, { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { app } from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // register
  const createNewUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //password validation
  const validatePassword = password => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    return passwordRegex.test(password);
}

  //log in
  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //log in with google
  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  //observer current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async currentUser => {
      if (currentUser?.email) {
        setUser(currentUser)
        await axios.post(
          `${import.meta.env.VITE_API_URL}/jwt`,
          {
            email: currentUser?.email,
          },
          { withCredentials: true }
        )
        setLoading(false)
      } else {
        setUser(currentUser)
         await axios.get(
          `${import.meta.env.VITE_API_URL}/logout`,
          { withCredentials: true }
        )
        setLoading(false)
      }
    })
    return () => {
      return unsubscribe()
    }
  }, [])

  //sign out
  const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
}

  //update profile
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
}
  const authInfo = {
    setUser,
    user,
    loading,
    createNewUser,
    validatePassword,
    signInUser,
    signInWithGoogle,
    logOutUser,
    updateUserProfile,

  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {};

export default AuthProvider;
