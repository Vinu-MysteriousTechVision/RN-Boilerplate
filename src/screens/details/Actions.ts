import { Dispatch } from 'redux'
import actionCreatorFactory from 'typescript-fsa'
import { RootState } from '../../Reducer'

const actionCreator = actionCreatorFactory()

const updateCount = actionCreator<{}>('Home/Update_Count')

const updateLikeCount = (): any => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(updateCount({}))
  }
}

export const detailsActions = {
  updateCount,
  updateLikeCount
}
