import { Dispatch } from 'redux'
import actionCreatorFactory from 'typescript-fsa'
import { RootState } from '../../Reducer'

const actionCreator = actionCreatorFactory()

const DemoAction = actionCreator<{}>('Home/Update_Count')

const DemoAsyncAction = (): any => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(DemoAction({}))
  }
}

export const AppLoginSignupActions = {
  DemoAction,
  DemoAsyncAction
}
