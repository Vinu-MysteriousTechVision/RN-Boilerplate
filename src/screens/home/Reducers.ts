
import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { HomeActions } from './Actions'

export interface IHomeState {
  count: number
  isActionProgress: boolean
  isSuccessRequest: boolean
}

const initialState: IHomeState = {
  count: 0,
  isActionProgress: false,
  isSuccessRequest: true
}

const ActionRequestStartHandler = (state: IHomeState, payload: {}): IHomeState => {
  return {
    ...state,
    isActionProgress: true,
    isSuccessRequest: false
  }
}

const ActionRequestSuccessHandler = (state: IHomeState, payload: {}): IHomeState => {
  return {
    ...state,
    isActionProgress: false,
    isSuccessRequest: true
  }
}

const ActionRequestFailureHandler = (state: IHomeState, payload: {}): IHomeState => {
  return {
    ...state,
    isActionProgress: false,
    isSuccessRequest: false
  }
}

const updateCountHandler = (state: IHomeState, payload: {}): IHomeState => {
  return {
    ...state,
    count: state.count + 1
  }
}

export const reducer = reducerWithInitialState(initialState)
  .case(HomeActions.actionRequestStart, ActionRequestStartHandler)
  .case(HomeActions.actionRequestSuccess, ActionRequestSuccessHandler)
  .case(HomeActions.actionRequestFailure, ActionRequestFailureHandler)
  .case(HomeActions.updateCount, updateCountHandler)
  .build()
