import React, { useEffect } from "react";
import Exit from "./../assets/img/Exit.svg";
import RightArrow from "./../assets/img/right_arrow.svg";
import calendar from "./../assets/img/calendar.svg";
import { useDispatch, useSelector } from "react-redux";
import { loadPhoto } from "./../redux/action/loadingPhoto";

import "./Mainscren.css";

function Mainscreen() {
  const dispatch = useDispatch();

  const {
    photo: { data },
  }: any = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadPhoto());
  }, [dispatch]);

  return (
    <div className="mainscreen">
      <div className="mainscreen__exit">
        <button className="mainscreen__exit-btn">
          <span className="exit__text">Выйти</span>
          <img className="exit__img" src={Exit} alt="Exit" />
        </button>
      </div>
      <div className="mainscreen__information-block">
        <div className="information-block__header">
          <div className="header__title">Вылеты</div>
          <img className="header__img" src={RightArrow} alt="Right Arrow" />
          <div className="header__destination">SVO - JFK</div>
          <div className="header__date">7 июля 2020</div>
          <input className="header__date-input" type="date" />
        </div>
        <div className="information-block__carusel">
          {data.map((photo: any, index: number) => {
            return (
              <div
                className="carusel__img-block"
                key={`${photo.userImageURL}${index}`}
              >
                <img className="carusel__img" src={photo.userImageURL} alt="" />
              </div>
            );
          })}
        </div>
        <div>Добавлено в Избранное 10 рейсов</div>
        <div>
          <div>Картинка/Рейс/Цена</div>
          <div>Картинка/Рейс/Цена</div>
          <div>Картинка/Рейс/Цена</div>
        </div>
      </div>
    </div>
  );
}

export default Mainscreen;
