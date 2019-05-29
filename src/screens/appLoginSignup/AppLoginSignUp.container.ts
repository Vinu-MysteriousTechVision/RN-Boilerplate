import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { RootState } from '../../reducer'
import * as screenNames from '../navigation/ScreenNames'

import {
  AppLoginSignUp,
  IAppLoginSignUpDispatchProps,
  IAppLoginSignUpStateProps
} from './AppLoginSignUp.component'

interface OwnProps {
  navigation: any
}

// NOTE: get required value for this screen from Redux's State, and map it to the interface Component wants.
const mapStateToProps: MapStateToProps<
  IAppLoginSignUpStateProps,
  OwnProps,
  RootState
> = (state: RootState, ownProps: OwnProps) => {
  return {}
}

// NOTE: dispatch Redux action from component's event. e.g. onPress: dispatch(actions.submit({}))
const mapDispatchToProps: MapDispatchToProps<IAppLoginSignUpDispatchProps, OwnProps> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => ({
  onNavigateToLogin: () => {ownProps.navigation.navigate(screenNames.Login)},
  onNavigateToSignUp: () => {}
})

export const AppLoginSignUpContainer = connect(mapStateToProps, mapDispatchToProps, null, {})(AppLoginSignUp)
