import React, { useReducer, createContext, useEffect } from "react";
import jwtDecode from "jwt-decode";

const initialState = {
  user: null,
  isLoggedIn: false,
};

const AuthContext = createContext({
  user: null,
  login: (userData) => {},
  logout: () => {},
  loadUser: () => {},
});

function authReducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        user: action.payload,
        isLoggedIn: true,
      };
    case "LOGOUT":
      return {
        ...state,
        user: null,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}

function AuthProvider(props) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const setLoginSuccess = (isLoggedIn) => setState({ isLoggedIn });

  function login(userData) {
    localStorage.setItem("jwtToken", userData.token);
    // if (localStorage.getItem("jwtToken")) {
    //   const decodedToken = jwtDecode(localStorage.getItem("jwtToken"));
    //   if (decodedToken.exp * 1000 < Date.now()) {
    //     localStorage.removeItem("jwtToken");
    //   } else {
    //     initialState.user = Object.assign(decodedToken);
    //   }
    // }
    const decodedToken = jwtDecode(localStorage.getItem("jwtToken"));
    dispatch({
      type: "LOGIN",
      payload: decodedToken,
    });
  }

  function loadUser() {
    const userToken = localStorage.getItem("jwtToken");
    if (!userToken) {
      dispatch({
        type: ERROR,
      });
    }
    const decodedToken = jwtDecode(localStorage.getItem("jwtToken"));

    dispatch({
      type: "LOGIN",
      payload: decodedToken,
    });
  }

  function logout() {
    localStorage.removeItem("jwtToken");
    dispatch({ type: "LOGOUT" });
  }

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isLoggedIn: state.isLoggedIn,
        login,
        logout,
        initialState,
        loadUser,
      }}
      {...props}
    />
  );
}

export { AuthContext, AuthProvider };
