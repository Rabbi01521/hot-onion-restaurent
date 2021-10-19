import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const signInUsingGoogle = () => {
    setIsLoading(true);
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  const signInUsingGithub = () => {
    setIsLoading(true);
    const githubProvider = new GithubAuthProvider();
    return signInWithPopup(auth, githubProvider);
  };
  // create email and password user
  const registerNewUser = (email, password) => {
    setIsLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login using email, password
  const loginNewUser = (email, password) => {
    setIsLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const setUserName = (firstName, lastName) => {
    updateProfile(auth.currentUser, {
      displayName: firstName + " " + lastName,
    }).then((result) => {
      console.log(result);
    });
  };

  const verfiyEmail = () => {
    setIsLoading(true);
    sendEmailVerification(auth.currentUser).then((result) => {
      console.log(result);
      alert("Please Check Your Email");
    });
  };
  // observe user state change
  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        console.log("sign Out");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return {
    signInUsingGoogle,
    registerNewUser,
    logOut,
    user,
    isLoading,
    setIsLoading,
    signInUsingGithub,
    loginNewUser,
    setUserName,
    verfiyEmail,
  };
};

export default useFirebase;
