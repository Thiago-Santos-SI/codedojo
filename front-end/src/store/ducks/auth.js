import {createActions, createReducer} from "reduxsauce/lib/reduxsauce";
import Immutable from 'seamless-immutable'

const { Types, Creators } = createActions({
    signInRequest: ['email', 'password'],
    signInSuccess: ['token'],
    signOut: null
})

export const AuthTypes = Types
export default Creators;

export const INITIAL_STATE = Immutable({
    signedIn: !!localStorage.getItem("@codeDojo:token"),
    token: localStorage.getItem("@codeDojo:token") || null,
})

export const success = (state, {token}) => {
    console.log(token)
    /*
    if you want see the token
     */
    return state.merge({ signedIn: true, token })
}

export const logout = (state ) => {
    state.merge({ signedIn: false, token:null })
}

export const reducer = createReducer(INITIAL_STATE, {
    [Types.SIGN_IN_SUCCESS]: success,
    [Types.SIGN_OUT]: logout
})
