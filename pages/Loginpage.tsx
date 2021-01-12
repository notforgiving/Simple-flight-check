import React from "react";
import { useDispatch } from "react-redux";
import "./Login.css";
import { loadData } from "./../redux/action/auth";

function Loginpage(): any {
  const dispatch = useDispatch();

  const onClick = ()=>{
    dispatch(loadData())
    console.log('test')
  }

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
          <button className="form__btn" onClick={onClick}>
            Войти
          </button>
        </div>
      </div>
    </>
  );
}

export default Loginpage;
