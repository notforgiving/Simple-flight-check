import { takeEvery, put, call } from "redux-saga/effects";
import firebase from "firebase";
import { actionsForAuth } from "./../action/auth";
import { loginactioncreactor, logoutactioncreactor } from "./../action/auth";
import {setError} from './../action/error'

interface userData {
  additionalUserInfo: any;
  credential: any;
  operationType: any;
  user: any;
  message: string;
}

function fetchAuth(authData: any) {
  return firebase
    .auth()
    .createUserWithEmailAndPassword(authData.login, authData.password)
    .catch(error=>({
      message:error.message
    }));;
}

function fetchEnter(authData: any) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(authData.login, authData.password)
    .catch(error=>({
      message:error.message
    }));
}

function fetchOut() {
  return firebase.auth().signOut();
}

function* workerLogIn(authData: any) {
  var result: userData = yield call(fetchEnter, authData);
  if(result.message==='The password is invalid or the user does not have a password.'){
    var error:string = yield put(setError(result.message));
  }
  else if(result.message==='There is no user record corresponding to this identifier. The user may have been deleted.'){
    result = yield call(fetchAuth, authData);
  }
  yield put(loginactioncreactor(true, result.user.email));
}

function* workerLogOut() {
  let result: userData = yield call(fetchOut);
  yield put(logoutactioncreactor(false, ""));
}

export function* watchLogIn() {
  yield takeEvery(actionsForAuth.AUTH, workerLogIn);
}

export function* watchLogOut() {
  yield takeEvery(actionsForAuth.EXIT, workerLogOut);
}
