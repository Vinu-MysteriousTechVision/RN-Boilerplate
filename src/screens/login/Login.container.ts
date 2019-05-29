import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { RootState } from '../../reducer'
import * as screenNames from '../navigation/ScreenNames'
import {LoginActions} from './Actions'
import {
  ILoginDispatchProps,
  ILoginStateProps,
  Login
} from './Login.component'

interface OwnProps {
  navigation: any
}

export const loginValidator = (val1: number, val2: number) => {
  return val1 + val2

}

// NOTE: get required value for this screen from Redux's State, and map it to the interface Component wants.
const mapStateToProps: MapStateToProps<ILoginStateProps, OwnProps, RootState> = (state: RootState, ownProps: OwnProps) => {
  const { isActionProgress, isSuccessRequest, error } = state.login
  return {
    isLoading: isActionProgress,
    isSuccessRequest,
    error
  }
}

// NOTE: dispatch Redux action from component's event. e.g. onPress: dispatch(actions.submit({}))
const mapDispatchToProps: MapDispatchToProps<ILoginDispatchProps, OwnProps> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => ({
  onLoginRequest: (userName: string, password: string) => {
    console.log('onLoginRequest:: ' + userName + ':' + password)
    dispatch(LoginActions.loginRequest())
  },
  loginSuccessHandler: () => {
    ownProps.navigation.navigate(screenNames.App)
  },
  backButtonHandler: () => {
    ownProps.navigation.goBack()
  }
})

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps, null, {})(Login)
