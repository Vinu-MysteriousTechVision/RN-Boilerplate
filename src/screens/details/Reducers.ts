import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { detailsActions } from './Actions'

export interface DetailsState {
  count: number
}

const initialState: DetailsState = {
  count: 0
}

const updateCountHandler = (state: DetailsState, payload: {}): DetailsState => {
  return {
    ...state,
    count: state.count + 1
  }
}

export const detailsReducer = reducerWithInitialState(initialState)
  .case(detailsActions.updateCount, updateCountHandler)
  .build()
