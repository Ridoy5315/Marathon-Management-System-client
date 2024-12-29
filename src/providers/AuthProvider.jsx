import React, { createContext } from "react";
import PropTypes from "prop-types";
import { app } from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const authInfo = {};
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {};

export default AuthProvider;
