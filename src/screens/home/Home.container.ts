
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { RootState } from '../../reducer'
import * as ScreenNames from '../navigation/ScreenNames'
import { HomeActions } from './Actions'
import { Home, IHomeDispatchProps, IHomeStateProps } from './Home.component'

interface OwnProps {
  navigation: any
}

// NOTE: get required value for this screen from Redux's State, and map it to the interface Component wants.
const mapStateToProps: MapStateToProps<IHomeStateProps, OwnProps, RootState> = (state: RootState, ownProps: OwnProps) => {
  const { isLogin } = state.app
  const { isActionProgress, isSuccessRequest } = state.home
  return {
    isLoading: isActionProgress,
    isSuccessRequest,
    isLogin
  }
}

// NOTE: dispatch Redux action from component's event. e.g. `onPress: dispatch(actions.submit({}))`
const mapDispatchToProps: MapDispatchToProps<IHomeDispatchProps, OwnProps> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => ({
  onLogoutRequest: async () => {
    dispatch(HomeActions.onLogoutRequest())
  },
  onLogoutSuccessHandler: () => {
    console.log('onLogoutSuccessHandler')
    ownProps.navigation.navigate(ScreenNames.Auth)
  },
  navigateToDetailsScreen: () => {
    ownProps.navigation.navigate(ScreenNames.Details)
  },
  navigateToDemoListViewScreen: () => {
    ownProps.navigation.navigate(ScreenNames.DemoListView)
  }
})

export const HomeContainer = connect(mapStateToProps, mapDispatchToProps, null, {})(Home)
