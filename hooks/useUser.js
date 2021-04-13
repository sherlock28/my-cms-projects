import { useState, useCallback, useContext } from "react";
import UserContext from "context/UserContext";
import { signInService, signOutService } from "services/";

export function useUser() {
  const { jwt, setJwt, userId, setUserId } = useContext(UserContext);
  const [state, setState] = useState({
    loading: false,
    error: false,
    message: null,
  });

  const signIn = useCallback(({ email, password }) => {
    setState({ loading: true, error: false, message: null });
    signInService({ email, password })
      .then(res => {
        /* save data in sessionStorage */
        setState({ loading: false, error: false, message: "" });
      })
      .catch(err => {
        window.sessionStorage.removeItem("jwt");
        window.sessionStorage.removeItem("userId");
        window.sessionStorage.removeItem("email");
        setState({ loading: false, error: true, message: "Has login error" });
      });
  }, []);

  const signOut = useCallback(({ jwt }) => {}, []);

  return {
    jwt,
    userId,
    isLoginLoading: state.loading,
    hasLoginError: state.error,
    loginMessage: state.error,
    isLogged: Boolean(jwt),
    signIn,
    signOut,
  };
}
