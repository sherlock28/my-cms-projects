import { useState, useCallback, useContext } from "react";
import UserContext from "context/UserContext";
import { signInService, signOutService } from "services";
import { decodeToken } from "libs";

export function useUser() {
  const { jwt, setJwt, userId, setUserId, username, setUsername } = useContext(
    UserContext
  );
  const [state, setState] = useState({
    loading: false,
    error: false,
    message: null,
  });

  const signIn = useCallback(
    ({ email, password }) => {
      setState({ loading: true, error: false, message: null });
      signInService({ email, password })
        .then(res => {
          const jwtDecode = decodeToken(res.jwt);
          window.sessionStorage.setItem("jwt", res.jwt);
          window.sessionStorage.setItem("userId", jwtDecode._id);
          window.sessionStorage.setItem("email", jwtDecode.email);
          window.sessionStorage.setItem("username", jwtDecode.username);
          setJwt(res.jwt);
          setUserId(res._id);
          setUsername(res.username);
          setState({ loading: false, error: false, message: res.message });
        })
        .catch(err => {
          window.sessionStorage.removeItem("jwt");
          window.sessionStorage.removeItem("userId");
          window.sessionStorage.removeItem("email");
          window.sessionStorage.removeItem("username");
          setState({ loading: false, error: true, message: "Has login error" });
          console.error(err);
        });
    },
    [setJwt]
  );

  const signOut = useCallback(({ jwt }) => {}, []);

  return {
    jwt,
    userId,
    username,
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    loginMessage: state.error,
    isLogged: Boolean(jwt),
    signIn,
    signOut,
  };
}
