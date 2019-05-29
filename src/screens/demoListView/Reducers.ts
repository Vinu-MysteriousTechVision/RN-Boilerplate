import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { DemoListViewActions } from './Actions'

export interface DemoListViewState {
  data: any[]
  selectedData: any
}

const initialState: DemoListViewState = {
  data: [],
  selectedData: undefined
}

const dataListRequestSuccessHandler = (state: DemoListViewState, payload: any[]): DemoListViewState => {
  return {
    ...state,
    data: payload
  }
}

const updateSelectedItemHandler = (state: DemoListViewState, payload: any): DemoListViewState => {
  return {
    ...state,
    selectedData: payload
  }
}

export const DemoListViewReducer = reducerWithInitialState(initialState)
  .case(DemoListViewActions.dataListRequestSuccess, dataListRequestSuccessHandler)
  .case(DemoListViewActions.updateSelectedItem, updateSelectedItemHandler)
  .build()
