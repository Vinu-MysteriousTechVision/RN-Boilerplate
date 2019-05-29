import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { AppRootActions } from './Actions'

export interface AppRootState {
  isLogin: boolean
}

const initialState: AppRootState = {
  isLogin: false
}

const setLoginStatusHandler = (state: AppRootState, payload: {}): AppRootState => {
  return {
    ...state,
    isLogin: true
  }
}

const setLogoutStatusHandler = (state: AppRootState, payload: {}): AppRootState => {
  return {
    ...state,
    isLogin: false
  }
}

export const AppRootReducer = reducerWithInitialState(initialState)
  .case(AppRootActions.setLoginStatus, setLoginStatusHandler)
  .case(AppRootActions.setLogoutStatus, setLogoutStatusHandler)
  .build()
