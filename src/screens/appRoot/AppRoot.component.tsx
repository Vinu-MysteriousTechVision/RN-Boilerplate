import React, { Component } from 'react'
import { ActivityIndicator, StatusBar, View } from 'react-native'

export interface IAppRootStateProps {
  isLogin: boolean
}

export interface IAppRootDispatchProps {
  bootstrapAsync: (isLogin: boolean) => void
}

interface IAppRootProps extends IAppRootStateProps, IAppRootDispatchProps {
  navigation: any
}

interface IAppRootState {}

export class AppRoot extends Component<IAppRootProps, IAppRootState> {

  constructor(props: IAppRootProps) {
    super(props)
    // Fetch the token from storage then navigate to our appropriate place
    this.props.bootstrapAsync(this.props.isLogin)
  }

  // Render any loading content that you like here
  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle='default' />
      </View>
    )
  }
}

export default AppRoot
