import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { ErrorCodes } from '../../lib'
import { IAppServerError } from '../../models/entity.type'
import { getAppServerError } from '../../models/Server.error'
import { getUserData, IUser } from '../../models/user'
import { LoginActions } from './Actions'

export interface LoginState {
  isActionProgress: boolean
  isSuccessRequest: boolean
  user: IUser
  error: IAppServerError | undefined
}

const initialState: LoginState = {
  isActionProgress: false,
  isSuccessRequest: false,
  user: getUserData({}),
  error: undefined
}

const ActionRequestStartHandler = (state: LoginState, payload: {}): LoginState => {
  return {
    ...state,
    isActionProgress: true,
    isSuccessRequest: false,
    error: undefined
  }
}

const ActionRequestSuccessHandler = (state: LoginState, payload: {}): LoginState => {
  return {
    ...state,
    isActionProgress: false,
    isSuccessRequest: true
  }
}

const ActionRequestFailureHandler = (state: LoginState, payload: IAppServerError): LoginState => {
  return {
    ...state,
    isActionProgress: false,
    isSuccessRequest: false,
    error: payload
  }
}

const loginRequestSuccessHandler = (state: LoginState, payload: IUser): LoginState => {
  return {
    ...state,
    user: payload
  }
}

export const LoginReducer = reducerWithInitialState(initialState)
  .case(LoginActions.ActionRequestStart, ActionRequestStartHandler)
  .case(LoginActions.ActionRequestSuccess, ActionRequestSuccessHandler)
  .case(LoginActions.ActionRequestFailure, ActionRequestFailureHandler)
  .case(LoginActions.LoginRequestSuccess, loginRequestSuccessHandler)
  .build()
