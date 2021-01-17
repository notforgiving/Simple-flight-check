import React from "react";
import { useSelector } from "react-redux";
import Loginpage from "./pages/Loginpage";
import Mainscreen from "./pages/Mainscreen";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAG3ymK64c05nvnJFeSLk2iL4ZJtFz0GaA",
  authDomain: "flight-check-5c3a5.firebaseapp.com",
  projectId: "flight-check-5c3a5",
  storageBucket: "flight-check-5c3a5.appspot.com",
  messagingSenderId: "887097174657",
  appId: "1:887097174657:web:2ff49502589cac3f3f7b80",
  measurementId: "G-JMWRV2W8HC",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

function Switch() {
  const { authorization }: any = useSelector((state) => state);
  return <>{authorization.login ? <Mainscreen /> : <Loginpage />}</>;
}

export default Switch;
