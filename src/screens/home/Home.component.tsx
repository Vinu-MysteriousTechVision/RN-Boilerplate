import React, { Component } from 'react'
import { ActivityIndicator, Button, Image, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

import { NButton } from '../../components/NButton'
import { LocalizedString } from '../../i18n'
import Res from '../../res'

export interface IHomeStateProps {
  isLogin: boolean
  isLoading: boolean
  isSuccessRequest: boolean
}
export interface IHomeDispatchProps {
  navigateToDetailsScreen: () => void
  onLogoutRequest: () => void
  onLogoutSuccessHandler: () => void
  navigateToDemoListViewScreen: () => void
}

interface IHomeProps extends IHomeStateProps, IHomeDispatchProps {
  navigation: any
}

interface IHomeState {
  isLoading: boolean
}

export class Home extends Component<IHomeProps, IHomeState> {

  state: IHomeState
  constructor(props: IHomeProps) {
    super(props)
    this.state = {
      isLoading: false
    }
  }

  onLogoutRequest = () => {
    const { onLogoutRequest } = this.props
    this.setState({
      isLoading: true
    })
    onLogoutRequest()
  }

  apiSuccessHandler = (prevProps: IHomeProps, prevState: IHomeState) => {
    console.log('Home::apiSuccessHandler')
    const {isLogin} = this.props
    const { onLogoutSuccessHandler } = this.props

    if (!isLogin) {
      onLogoutSuccessHandler()
      return
    }
  }

  apiErrorHandler = (prevProps: IHomeProps, prevState: IHomeState) => {
    console.log('Home::apiErrorHandler')
  }

  componentDidUpdate(prevProps: IHomeProps, prevState: IHomeState) {

    if ((prevProps.isLoading !== this.props.isLoading) && (this.props.isLoading === false) && (this.state.isLoading)) {
      const apiCompletionAction = this.props.isSuccessRequest ? this.apiSuccessHandler : this.apiErrorHandler
      apiCompletionAction(prevProps, prevState)
    }
  }

  render() {
    const { navigateToDetailsScreen, navigateToDemoListViewScreen } = this.props
    const { isLoading } = this.state

    return (
      <View style={styles.container}>
        <Spinner visible={isLoading}/>
        <Image style={styles.logo} source={Res.Images.logo} />
        <Text style={styles.welcomeText}>{LocalizedString.welcomeText}</Text>
        <Button title='Show Demo List Page' onPress={navigateToDemoListViewScreen} />
        <Button title='Sign me out :)' onPress={this.onLogoutRequest} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  welcomeText: {
    ...Res.Palette.heading,
    ...{}
  },
  logo: {
    ...Res.Palette.logo,
    ...{
      backgroundColor: 'transparent'
    }
  }
})

export default Home
