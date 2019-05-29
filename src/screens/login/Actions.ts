import { Alert } from 'react-native'
import { Dispatch } from 'redux'
import actionCreatorFactory from 'typescript-fsa'

import { IAppServerError } from '../../models/entity.type'
import { getUserData, IUser } from '../../models/user'
import { RootState } from '../../Reducer'
import { getNetworkError } from '../../services/HttpRequestErrorHandler'
import { AppRootActions } from '../appRoot'

const actionCreator = actionCreatorFactory()

const ActionRequestStart = actionCreator<{}>('AppRoot/ACTION_REQUEST_START')
const ActionRequestSuccess = actionCreator<{}>('AppRoot/ACTION_REQUEST_SUCCESS')
const ActionRequestFailure = actionCreator<IAppServerError>('AppRoot/ACTION_REQUEST_FAILURE')

const LoginRequestSuccess = actionCreator<IUser>('AppRoot/LOGIN_REQUEST_SUCCESS')

const loginRequest = (): any => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(ActionRequestStart({}))
    const isConnected = getState().network.isConnected
    if (!isConnected) {
      const error: IAppServerError = getNetworkError()
      setTimeout(() => {
        dispatch(ActionRequestFailure(error))
      }, 1000)
      return
    }

    setTimeout(() => {
      const response = {} // Login Api Response
      const user: IUser = getUserData(response)
      dispatch(LoginRequestSuccess(user))

      dispatch(AppRootActions.setLoginStatus({}))
      dispatch(ActionRequestSuccess({}))
    }, 1000)
  }
}

export const LoginActions = {
  ActionRequestStart,
  ActionRequestSuccess,
  ActionRequestFailure,
  LoginRequestSuccess,
  loginRequest
}
