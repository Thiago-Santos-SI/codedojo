import { all, takeLatest } from 'redux-saga/effects'


import { AuthTypes } from "../ducks/auth";
import {signIn, signOut } from "./auth";

export function* rootSaga(){
    return yield all([
        takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn ),
        takeLatest(AuthTypes.SIGN_OUT, signOut),
    ])
}
