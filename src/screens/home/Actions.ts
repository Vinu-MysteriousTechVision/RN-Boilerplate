import { Dispatch } from 'redux'
import actionCreatorFactory from 'typescript-fsa'

import { RootState } from '../../Reducer'
import {GET_MOVIES, IConfig} from '../../services'
import {serviceActions} from '../../services'
import { AppRootActions } from '../appRoot';

const actionCreator = actionCreatorFactory()

const actionRequestStart = actionCreator<{}>('Home/ACTION_REQUEST_START')
const actionRequestSuccess = actionCreator<{}>('Home/ACTION_REQUEST_SUCCESS')
const actionRequestFailure = actionCreator<{}>('Home/ACTION_REQUEST_FAILURE')

const updateCount = actionCreator<{}>('Home/Update_Count')

const getMovieList = (): any => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {

    const fetchServiceSuccess = (response: any) => {
      console.log('Response:' + response)

      dispatch(updateCount({}))
    }

    const fetchServiceError = (error: any) => {
      console.log('Error:' + error)
    }

    const config: IConfig = {
      api : GET_MOVIES,
      parameter: {},
      success: fetchServiceSuccess,
      error: fetchServiceError
    }
    dispatch(serviceActions.httpRequestAction(config))
  }
}

const onLogoutRequest = (): any => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(actionRequestStart({}))
    setTimeout(() => {
      dispatch(AppRootActions.logoutHandler())
      dispatch(actionRequestSuccess({}))
    }, 1000);
  }
}

export const HomeActions = {
  actionRequestStart,
  actionRequestSuccess,
  actionRequestFailure,
  updateCount,
  getMovieList,
  onLogoutRequest
}
