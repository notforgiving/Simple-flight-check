import React, { useEffect, useState } from "react";
import Exit from "./../assets/img/Exit.svg";
import RightArrow from "./../assets/img/right_arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { loadPhoto } from "./../redux/action/loadingPhoto";
import { loadFlights } from "./../redux/action/loadingflights";
import "./Mainscren.css";
import Flight from "../components/Flight";

function Mainscreen() {
  const dispatch = useDispatch();
  const [date, setDate] = useState("2021-01-14");
  const { photo, flights }: any = useSelector((state) => state);

  const {
    data: { Places, Quotes, Carriers },
  } = flights;

  useEffect(() => {
    dispatch(loadPhoto());
    dispatch(loadFlights(date));
  }, [dispatch]);

  const handleChengeDate = (e: any): void => {
    setDate(e.target.value);
    dispatch(loadFlights(e.target.value));
  };
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
          <div className="header__date">{date}</div>
          <input
            className="header__date-input"
            type="date"
            value={date}
            onChange={handleChengeDate}
          />
        </div>
        <div className="information-block__carusel">
          {photo.data.map((photo: any, index: number) => {
            return (
              <div
                className="carusel__img-block"
                key={`${photo.previewURL}${index}`}
              >
                <img className="carusel__img" src={photo.previewURL} alt="" />
              </div>
            );
          })}
        </div>
        <div className="information-block__sum">
          Добавлено в Избранное <span>10</span> рейсов
        </div>
        <div className="information-block__flights">
          {Quotes
            ? Quotes.map((flight: any, index: any) => {
                console.log(Quotes[index].MinPrice);
                return (
                  <Flight
                    key={`flight${index}`}
                    places={Places}
                    carriers={Carriers[index].Name}
                    price={Quotes[index].MinPrice}
                    departmentDate = {Quotes[index].OutboundLeg.DepartureDate}
                  />
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
}

export default Mainscreen;
