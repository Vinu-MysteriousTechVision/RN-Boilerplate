import React, { Component } from 'react'
import { Image, Text, View, TouchableOpacity } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import { showDialog } from '../../lib'
import { IAppServerError } from '../../models/entity.type'
import { getUserData } from '../../models/user'
import Res from '../../res'
import { Form } from './Form.component'
import {Styles} from './style'

export interface ILoginStateProps {
  isLoading: boolean
  isSuccessRequest: boolean
  error: IAppServerError
}

export interface ILoginDispatchProps {
  onLoginRequest: (userName: string, password: string) => void
  loginSuccessHandler: () => void
  backButtonHandler: () => void
}

interface ILoginProps extends ILoginStateProps, ILoginDispatchProps {}

interface ILoginState {
  isLoading: boolean
}

export class Login extends Component<ILoginProps, ILoginState> {

  static navigationOptions = ({ navigation }: any) => {
    return {
      header: null
    }
  }

  state: ILoginState

  constructor(props: ILoginProps) {
    super(props)
    this.state = {
      isLoading: false
    }
  }

  onPressLogin = () => {
    const {onLogIn} = this.props
    this.setState((prevState: ILoginState, props: ILoginProps) => ({
      isLoading: true
    }))

    onLogIn()
  }

  onSubmitForm = (userName: string, password: string) => {
    const {onLoginRequest} = this.props
    this.setState((prevState: ILoginState, props: ILoginProps) => ({
      isLoading: true
    }))

    onLoginRequest(userName, password)
  }

  apiSuccessHandler = (prevProps: ILoginProps, prevState: ILoginState) => {
    console.log('apiSuccessHandler')
    const {loginSuccessHandler} = this.props
    loginSuccessHandler()
  }

  apiErrorHandler = (prevProps: ILoginProps, prevState: ILoginState) => {
    const { error } = this.props
    this.setState({
      isLoading: false
    })
    showDialog('Error', error.message!, () => {})
  }

  componentDidUpdate(prevProps: ILoginProps, prevState: ILoginState) {
    if ((prevProps.isLoading !== this.props.isLoading) && (this.props.isLoading === false) && (this.state.isLoading)) {
      const apiCompletionAction = this.props.isSuccessRequest ? this.apiSuccessHandler : this.apiErrorHandler
      apiCompletionAction(prevProps, prevState)
    }
  }

  render() {
    const {isLoading} = this.state
    const {backButtonHandler} = this.props

    return (
      <View style={Styles.container}>
        <Spinner visible={isLoading}/>
        <KeyboardAwareScrollView
          scrollEnabled={true}
          enableAutomaticScroll={true}
          showsVerticalScrollIndicator={true}
          contentContainerStyle={Styles.KeyboardAwareScrollViewContainer}
          keyboardShouldPersistTaps={'handled'}
          enableOnAndroid={true}
          enableResetScrollToCoords={true}
          bounces={false}
        >
          <View style={{height: 250, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontFamily: 'Thinkharder', fontSize: 30}} >Naico</Text>
          </View>
          <View style={{flex: 1}}>
            <Form formStyle={{}} onSubmitForm={this.onSubmitForm}/>
          </View>
          <TouchableOpacity style={Styles.back_button}  onPress={backButtonHandler}>
            <Image style={{height: 25, width: 25}} source={Res.Images.back_left_arrow} />
          </TouchableOpacity>
        </KeyboardAwareScrollView>
      </View>
    )
  }
}

export default Login
