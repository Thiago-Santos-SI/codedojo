import { call, put } from 'redux-saga/effects'
import api from "../../services/api";
import { push } from 'connected-react-router'

import { notification } from 'antd';

import AuthActions from '../ducks/auth'

const openNotificationWithIcon = type => {
    notification[type]({
        message: 'Falha no Login',
        description: 'Verifique seu e-mail/senha',

    });
};

export function* signIn({ email, password }) {
    try {
      const response = yield call(api.post, '/sessions', {email, password})

        localStorage.setItem('@codeDojo:token', response.data.token)

        yield put(AuthActions.signInSuccess(response.data.token))

        yield put(push('/main'))

    } catch (e) {
        openNotificationWithIcon('error')
    }
}
