import { put, takeLatest } from "redux-saga/effects";
import { signUpFailure, signUpLoading, signUpSuccess } from "../slices/signup";
import { signInFailure, signInLoading, signInSuccess } from "../slices/signIn";
import { customHistory } from "../customRoute";
import { login, notes } from "../utils/routes";


function* signUpSaga({ payload }) {
  try {
    yield put(signUpLoading());
    yield put(signUpSuccess(payload));
    customHistory.push(login);
  } catch (error) {
    yield put(signUpFailure(error));
  }
}

function* signInSaga({ payload }) {
  try {
    yield put(signInLoading());
    yield put(signInSuccess(payload));
    customHistory.push(notes);
  } catch (error) {
    yield put(signInFailure(error));
  }
}


export function* watchSignUp() {
  yield takeLatest("sign-up", signUpSaga);
}

export function* watchSignIn() {
  yield takeLatest("sign-in", signInSaga);
}
