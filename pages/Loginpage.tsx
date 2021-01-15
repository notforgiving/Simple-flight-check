import React, { ReactFragment } from "react";
import { StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import "./Login.css";

function Loginpage(): any {
  return (
    <>
      <div className="mainscreen"> </div>
      <div className="form">
        <div className="form__title">Simple Flight Check</div>
        <label className="form__input-label ">
          Логин:
          <input className="form__input" />
        </label>
        <label className="form__input-label ">
          Пароль:
          <input className="form__input" />
        </label>
        <div className="btn__group">
          <button className="form__btn">
            Войти
          </button>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
