import React, { Component } from 'react'
import { Text, View } from 'react-native'

import { NButton } from '../../components'
import {Styles} from './style'

export interface IAppLoginSignUpStateProps {}

export interface IAppLoginSignUpDispatchProps {
  onNavigateToLogin: () => void
  onNavigateToSignUp: () => void
}

interface IAppLoginSignUpProps extends IAppLoginSignUpStateProps, IAppLoginSignUpDispatchProps {}

interface IAppLoginSignUpState {}

export class AppLoginSignUp extends Component<IAppLoginSignUpProps, IAppLoginSignUpState> {

  static navigationOptions = ({ navigation }: any) => {
    return {
      header: null
    }
  }

  constructor(props: IAppLoginSignUpProps) {
    super(props)
  }

  onNavigateToLogin = () => {
    this.props.onNavigateToLogin()
  }

  onNavigateToSignUp = () => {
    this.props.onNavigateToSignUp()
  }

  render() {
    return (
      <View style={Styles.container}>
        <NButton buttonStyle={{marginBottom: 10}} title='Login' onPress={this.onNavigateToLogin} />
        <NButton title='Register' onPress={this.onNavigateToSignUp} />
      </View>
    )
  }
}

export default AppLoginSignUp
