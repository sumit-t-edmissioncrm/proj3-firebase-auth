import { createContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import auth from "../firebaseConfig";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export default function AuthState({ children }) {
  const [registerFormData, setRegisterFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const registerWithFirebase = () => {
    setLoading(true);
    const { email, password } = registerFormData;
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithFirebase = () => {
    setLoading(true);
    const { email, password } = loginFormData;
    return signInWithEmailAndPassword(auth, email, password);
  };
  const handelLogout = () => {
    setLoginFormData({
      email: "",
      password: "",
    });
    setRegisterFormData({
      name: "",
      email: "",
      password: "",
    });
    return signOut(auth);
  };

  useEffect(() => {
    const checkAuthState = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      checkAuthState();
    };
  }, []);

  useEffect(() => {
    if (user) {
      navigate("/profile");
    }
  }, [user]);

  //   console.log(user, "USER");

  if (loading) {
    return <h1>Loading......</h1>;
  }

  return (
    <AuthContext.Provider
      value={{
        registerFormData,
        setRegisterFormData,
        registerWithFirebase,
        user,
        loading,
        setLoading,
        loginFormData,
        setLoginFormData,
        loginWithFirebase,
        handelLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
