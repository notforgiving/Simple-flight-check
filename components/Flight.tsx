import React, { useState, useEffect } from "react";
import FlightImg from "./../assets/img/flight.svg";
import Mark from "./../assets/img/mark.svg";
import Nomark from "./../assets/img/nomark.svg";
import Arrowright from "./../assets/img/arrowright.svg";
import { setFavorites, delFavorites } from "./../redux/action/favorites";
import { useDispatch, useSelector } from "react-redux";

function Flight({ places, carriers, price, departmentDate, idflight }: any) {
  const dispatch = useDispatch();
  const { favorites }: any = useSelector((state) => state);
  const [mark, setMark] = useState(
    favorites.indexOf(idflight) != -1 ? true : false
  );
  useEffect(() => {
    setMark(favorites.indexOf(idflight) != -1 ? true : false);
  }, [idflight]);

  const handleChangeMark = (): void => {
    setMark(!mark);
    mark ? dispatch(delFavorites(idflight)) : dispatch(setFavorites(idflight));
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
