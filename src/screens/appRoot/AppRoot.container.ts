import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { RootState } from '../../reducer'
import {
  AppRoot,
  IAppRootDispatchProps,
  IAppRootStateProps
} from './AppRoot.component'

interface OwnProps {
  navigation: any
}

// NOTE: get required value for this screen from Redux's State, and map it to the interface Component wants.
const mapStateToProps: MapStateToProps<
  IAppRootStateProps,
  OwnProps,
  RootState
> = (state: RootState, ownProps: OwnProps) => {
  const {isLogin} = state.app
  return {
    isLogin
  }
}

// NOTE: dispatch Redux action from component's event. e.g. onPress: dispatch(actions.submit({}))
const mapDispatchToProps: MapDispatchToProps<IAppRootDispatchProps, OwnProps> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => ({
  bootstrapAsync: async (isLogin: boolean) => {
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    ownProps.navigation.navigate(isLogin ? 'App' : 'Auth')
  }
})

export const AppRootContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {}
)(AppRoot)
