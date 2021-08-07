import { Dispatch } from 'redux'

interface SetUserPayload {
    user: any
}

export interface SetUser {
    type: 'SET_USER',
    payload: SetUserPayload
}

const setUser = (user: any): SetUser => ({
    type: 'SET_USER',
    payload: { user }
})

export const fetchUser = () => async (dispatch: Dispatch) => {
    const response = await fetch('http://httpbin.org/get')
    const user = await response.json()
    dispatch(setUser(user))
}

export type UserActionTypes = SetUser