import { takeEvery, put, call } from "redux-saga/effects";
import { actionsForPhoto, getPhoto } from "../action/loadingPhoto";

interface IServerDate{
  hits:Array<object>
}

function fetchData(){
  return fetch(
    "https://pixabay.com/api/?key=19859155-b05cf0f2450df521a3bc291dc&image_type=photo&pretty=true")
    .then(response => response.json())
}

function* workerLOadData() {
  const data:IServerDate = yield call(fetchData);
  yield put(getPhoto(data.hits));
}

export function* watchLoadData() {
  yield takeEvery(actionsForPhoto.LOAD_PHOTO, workerLOadData);
}
