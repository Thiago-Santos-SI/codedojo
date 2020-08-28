import { call, put } from 'redux-saga/effects'
import api from "../../services/api";

import AuthActions from '../ducks/auth'

export function* signIn({ email, password }) {
    try {
      const response = yield call(api.post, '/sessions', {email, password})
        console.log(response)
        localStorage.setItem('@codeDojo:token', response.data.token)

        yield put(AuthActions.signInSuccess(response.data.token))
    } catch (e) {
        console.log(e)
    }
}
