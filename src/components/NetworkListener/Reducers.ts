import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { NetworkListenerActions } from './Actions'

export interface NetworkState {
  isConnected: boolean
}

const initialState: NetworkState = {
  isConnected: true
}

const setNetworkStatusHandler = (state: NetworkState, payload: boolean): NetworkState => {
  return {
    ...state,
    isConnected: payload
  }
}

export const NetworkReducer = reducerWithInitialState(initialState)
  .case(NetworkListenerActions.setNetworkStatus, setNetworkStatusHandler)
  .build()
