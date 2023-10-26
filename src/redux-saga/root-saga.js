import { all, fork } from "redux-saga/effects";
import { watchSignIn, watchSignUp } from "./sagas";

const rootSaga = function* () {
  yield all([
    fork(watchSignUp),
    fork(watchSignIn)
  ]);
};

export default rootSaga;
