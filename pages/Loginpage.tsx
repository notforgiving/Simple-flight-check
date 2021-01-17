import React, { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Login.css";
import { authorizationacrion } from "./../redux/action/auth";
import classNames from "classnames";

function Loginpage(): any {
  const dispatch = useDispatch();

  const {errors}:any = useSelector((state)=>state)

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const [errLogin, setErrLogin] = useState("");
  const [errPassword, setErrPassword] = useState("");
  const handleEntre = () => {
    if (login === "" && password === "") {
      setErrPassword("Заполните поля логин и пароль");
    } else if (password.length < 8) {
      setErrPassword("Пароль должен быть более 8 символов");
    } else if (!(login.includes("@") && login.includes("."))) {
      setErrLogin("Неверный формат почты");
    } else {
      dispatch(authorizationacrion(login,password))
    }
  };

  useEffect(()=>{
    setErrPassword(errors)
  },[errors])

  const handleChangeLogin = (e: any) => {
    setErrLogin('')
    setErrPassword('')
    setLogin(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    setErrLogin('')
    setErrPassword('')
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="loginscreen"> </div>
      <div className="form">
        <div className="form__title">Simple Flight Check</div>
        <label className="form__input-label ">
          Логин:
          <input
            className="form__input"
            value={login}
            onChange={handleChangeLogin}
          />
          {errLogin ? <div className="input__error">{errLogin}</div> : ""}
        </label>
        <label className="form__input-label ">
          Пароль:
          <input
            className="form__input"
            value={password}
            onChange={handleChangePassword}
          />
          {errPassword ? <div className="input__error">{errPassword}</div> : ""}
        </label>
        <div className="btn__group">
          <button onClick={handleEntre} className="form__btn">
            Войти
          </button>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
