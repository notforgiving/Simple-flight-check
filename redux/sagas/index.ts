import { takeEvery, put, call } from "redux-saga/effects";
import { actionsForPhoto, getPhoto } from "../action/loadingPhoto";
import { actionsForFlight, getFlights } from "./../action/loadingflights";

interface IServerDate {
  hits: Array<object>;
}

function fetchPhoto() {
  return fetch(
    "https://pixabay.com/api/?key=19859155-b05cf0f2450df521a3bc291dc&q=new%20york&per_page=10&pretty=true"
  ).then((response) => response.json());
}

function fetchFlights(date:any) {
  return fetch(
    `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/RU/RUB/ru-RU/SVO-sky/JFK-sky/${date.selectedDate}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-key": "88ee1acd86msh4cada9d53fe6057p13c107jsn7f6a88ad6b06",
        "x-rapidapi-host":
          "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
      },
    }
  ).then((response) => response.json());
}

function* workerLoadPhoto() {
  const photos: IServerDate = yield call(fetchPhoto);
  yield put(getPhoto(photos.hits));
}

function* workerLoadFlights(date:any) {
  const flights: object[] = yield call(fetchFlights,date);

  yield put(getFlights(flights));
}

export function* watchLoadData() {
  yield takeEvery(actionsForPhoto.LOAD_PHOTO, workerLoadPhoto);
  yield takeEvery(actionsForFlight.LOAD_FLIGHTS, workerLoadFlights);
}
