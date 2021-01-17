import React, { useState } from "react";
import FlightImg from "./../assets/img/flight.svg";
import Mark from "./../assets/img/mark.svg";
import Nomark from "./../assets/img/nomark.svg";
import Arrowright from "./../assets/img/arrowright.svg";

function Flight({ places, carriers, price, departmentDate }: any) {
  const [mark, setMark] = useState(false);
  const handleChangeMark = (): void => {
    setMark(!mark);
  };
  return (
    <div className="flights__block">
      <div className="flights__description">
        <img className="flights__block-img" src={FlightImg} alt="Flight" />
        <div className="flights__block-data">
          <p className="flights__destination">
            {places[1].CityName} ({places[1].IataCode}){" "}
            <img
              className="flights__block-arrow"
              src={Arrowright}
              alt="Arrowright"
            />{" "}
            {places[0].CityName} ({places[0].IataCode})
          </p>
          <p className="flights__date">{departmentDate}</p>
          <p className="flights__company">{carriers}</p>
        </div>
      </div>
      <div className="flights__block-control">
        <button className="mark__btn" onClick={handleChangeMark}>
          <img
            className="flights__block-mark"
            src={mark ? Mark : Nomark}
            alt="Mark"
          />
        </button>
        <div className="flights__block-price">
          Price: <span>{price} ₽</span>
        </div>
      </div>
    </div>
  );
}

export default Flight;
