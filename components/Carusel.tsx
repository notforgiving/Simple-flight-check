import React,{useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { loadPhoto } from "./../redux/action/loadingPhoto";

function Carusel() {
  const { photo}: any = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPhoto());
  }, []);
  return (
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
  );
}

export default Carusel;