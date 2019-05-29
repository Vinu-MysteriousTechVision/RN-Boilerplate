import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { RootState } from '../../reducer'
import * as ScreenNames from '../navigation/ScreenNames'
import { DemoListViewActions } from './Actions'
import {
  DemoListView,
  IDemoListViewDispatchProps,
  IDemoListViewStateProps
} from './DemoListView.component'

interface OwnProps {
  navigation: any
}

// NOTE: get required value for this screen from Redux's State, and map it to the interface Component wants.
const mapStateToProps: MapStateToProps<IDemoListViewStateProps, OwnProps, RootState> = (state: RootState, ownProps: OwnProps) => {
  const {data} = state.demoListView
  return {
    listData: data
  }
}

// NOTE: dispatch Redux action from component's event. e.g. onPress: dispatch(actions.submit({}))
const mapDispatchToProps: MapDispatchToProps<IDemoListViewDispatchProps, OwnProps> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => ({
  getDataList: (successCallback: () => void, errorCallback: () => void) => {
    dispatch(DemoListViewActions.dataListRequest(successCallback, errorCallback))
  },
  navigateToDetailsScreen: (navigationGoBackListener: () => void) => {
    ownProps.navigation.navigate(
      ScreenNames.Details,
      {
        onGoBack: navigationGoBackListener
      }
    )
  },
  setSelectedItem: (item: any) => {
    dispatch(DemoListViewActions.updateSelectedItem(item))
  }
})

export const DemoListViewContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {}
)(DemoListView)
