import { Dispatch } from 'redux'
import actionCreatorFactory from 'typescript-fsa'

import { RootState } from '../Reducer'
import { fetchServiceData, IConfig } from './HttpRequestHandler'

const actionCreator = actionCreatorFactory()

const httpRequestAction = (config: IConfig) => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {

    const fetchServiceSuccess = (response: any) => {
      config.success(response)
    }

    const fetchServiceError = (error: any) => {
      config.error(error)
    }

    const fetchServiceConfig: IConfig = {
      api: config.api,
      parameter: config.parameter,
      success: fetchServiceSuccess,
      error: fetchServiceError
    }
    fetchServiceData(fetchServiceConfig)
  }
}

export const serviceActions = {
  httpRequestAction
}
