import React, { useState, useEffect, createContext } from "react";

import {
  getAccessTokenApi,
  getRefreshTokenApi,
  refreshAccessTokenApi,
  logout
} from "../api/auth";

import jwtDecode from "jwt-decode";
export const AuthContext = createContext();

export default function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState({
    user: null,
    isLoading: true
  });

  useEffect(() => {
    checkUserLogin(setUser);
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

//Thus we check if the user is logged in.
function checkUserLogin(setUser) {
  const accessToken = getAccessTokenApi();

  if (!accessToken) {
    const refreshToken = getRefreshTokenApi();
    //!refresh token means it has expired.
    if (!refreshToken) {
      logout();
      setUser({
        user: null,
        isLoading: false
      });
    } else {
      refreshAccessTokenApi(refreshToken);
    }
    //if the access token is valid it will do the following.
  } else {
    setUser({
      isLoading: false,
      user: jwtDecode(accessToken)
    });
  }
}
