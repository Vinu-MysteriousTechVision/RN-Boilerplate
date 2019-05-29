import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { AppLoginSignupActions } from './Actions'

export interface AppLoginSignupState {
  count: number
}

const initialState: AppLoginSignupState = {
  count: 0
}

const DemoActionHandler = (state: AppLoginSignupState, payload: {}): AppLoginSignupState => {
  return {
    ...state,
    count: state.count + 1
  }
}

export const AppLoginSignupReducer = reducerWithInitialState(initialState)
  .case(AppLoginSignupActions.DemoAction, DemoActionHandler)
  .build()
