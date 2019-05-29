import { Dispatch } from 'redux'
import actionCreatorFactory from 'typescript-fsa'
import { RootState } from '../../Reducer'

const actionCreator = actionCreatorFactory()

const setLoginStatus = actionCreator<{}>('AppRoot/SET_LOGIN_STATUS')
const setLogoutStatus = actionCreator<{}>('AppRoot/SET_LOGOUT_STATUS')
const ActionRequestStart = actionCreator<{}>('AppRoot/ACTION_REQUEST_START')
const ActionRequestSuccess = actionCreator<{}>('AppRoot/ACTION_REQUEST_SUCCESS')
const ActionRequestFailure = actionCreator<{}>('AppRoot/ACTION_REQUEST_FAILURE')

const initiateLoginValues = (): any => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
  }
}

const logoutHandler = (): any => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(setLogoutStatus({}))
  }
}

export const AppRootActions = {
  setLoginStatus,
  initiateLoginValues,
  setLogoutStatus,
  logoutHandler
}
