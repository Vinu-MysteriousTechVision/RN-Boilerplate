import { Dispatch } from 'redux'
import actionCreatorFactory from 'typescript-fsa'
import { RootState } from '../../Reducer'

const actionCreator = actionCreatorFactory()

const dataListRequestSuccess = actionCreator<any[]>('DemoListView/DataListRequestSuccess')
const updateSelectedItem = actionCreator<any>('DemoListView/UpdateSelectedItem')

const dataListRequest = (successCallback: () => void, errorCallback: () => void): any => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(dataListRequestSuccess([]))
    setTimeout(() => {
      const response = {} // Login Api Response
      const responseData = [{id: 1001, title: 'Developer'}, {id: 1002, title: 'Tester'}]
      dispatch(dataListRequestSuccess(responseData))
      successCallback()
    }, 2500)
  }
}

export const DemoListViewActions = {
  dataListRequestSuccess,
  dataListRequest,
  updateSelectedItem
}
