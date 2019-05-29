import { Dispatch } from 'redux'
import actionCreatorFactory from 'typescript-fsa'

const actionCreator = actionCreatorFactory()
const setNetworkStatus = actionCreator<boolean>('AppRoot/SET_NETWORK_STATUS')

export const NetworkListenerActions = {
  setNetworkStatus
}
