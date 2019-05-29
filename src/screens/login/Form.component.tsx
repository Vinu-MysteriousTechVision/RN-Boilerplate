import React, { PureComponent } from 'react'
import { Alert, Button, Keyboard, StyleSheet, Text, View, ViewStyle } from 'react-native'

import _ from 'underscore'
import { NButton, NFormTextField } from '../../components' // '@components/NButton'
import { NLog } from '../../lib/naicoLoggingManager'
import { isEmptyText, validatePassword, validateUserName } from '../../lib/validator'

enum FieldType {
  UserName = 0,
  Password
}

interface IFormProps {
  formStyle?: ViewStyle
  onSubmitForm: (userName: string, password: string) => void
}

interface IFormErrorState {
  userNameErrorText: string
  passwordErrorText: string
  isValidForm: boolean
}

interface IFormState extends IFormErrorState {
  userName: string
  password: string
}

export class Form extends PureComponent<IFormProps, IFormState> {

  state: IFormState

  constructor(props: any) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      userNameErrorText: '',
      passwordErrorText: '',
      isValidForm: true
    }
  }

  private formRef: any = {
    userName: null,
    password: null
  }

  onPressLogin = () => {
    const {userName, password} = this.state
    if (!this.isFormValid()) {
      return
    }
    this.props.onSubmitForm(userName, password)
  }

  // =======================================================================================================
  // Validate the full form
  // =======================================================================================================
  isFormValid = () => {
    const {userName, password} = this.state
    let isValid = true
    if (isEmptyText(userName)) {
      this.setState({
        userNameErrorText: 'Please Enter a User Name'
      })
      isValid = false
      this.formRef.userName.focus()
    }

    if (isEmptyText(password)) {
      this.setState({
        passwordErrorText: 'Please Enter a User Name'
      })
      if (isValid) {
        isValid = false
        this.formRef.password.focus()
      }
    }
    return isValid
  }

  // =======================================================================================================
  // Validate the form field
  // =======================================================================================================
  validate = (field: FieldType, value: string) => {
    switch (field) {
      case FieldType.UserName:
        this.setState({
          userNameErrorText: isEmptyText(value) ? '' : validateUserName(value) ? '' : 'Please Enter valid User Name'
        })
        break
      case FieldType.Password:
        this.setState({
          passwordErrorText: isEmptyText(value) ? '' : validatePassword(value) ? '' : 'Please Enter valid Password'
        })
        break
      default:
        break
    }
  }

  // =======================================================================================================
  // Callback for the textField input changes
  // =======================================================================================================
  onChangeText = (field: FieldType, fieldName: string) => (value: any) => {
    try {
      const formField: any = {
        [fieldName]: value
      }
      this.setState(formField, () => { this.validate(field, value) })
    } catch (error) {
      NLog.error(error)
    }
  }

  // =======================================================================================================
  // Set focus to next element
  // =======================================================================================================
  onFieldChange = (field: FieldType, fieldValue: any) => () => {
    this.validate(field, fieldValue)

    switch (field) {
      case FieldType.UserName:
        this.formRef.password.focus()
        break
      default:
        Keyboard.dismiss()
        break
    }
  }

  setUserNameFieldRef = (refObj: any) => {
    this.formRef.userName = refObj
  }

  setPasswordFieldRef = (refObj: any) => {
    this.formRef.password = refObj
  }

  render() {
    const {userName, password} = this.state
    const {userNameErrorText, passwordErrorText} = this.state
    const {formStyle} = this.props
    return (
      <View style={[styles.container, formStyle]}>
        <NFormTextField
          NFormTextFieldRef={this.setUserNameFieldRef}
          maxLength={10}
          fieldType='User Name'
          errorText={userNameErrorText}
          onChangeText={this.onChangeText(FieldType.UserName, 'userName')}
          value={this.state.userName}
          onSubmitEditing={this.onFieldChange(FieldType.UserName, userName)}
        />
        <View style={styles.fieldMargin} />
        <NFormTextField
          NFormTextFieldRef={this.setPasswordFieldRef}
          maxLength={10}
          fieldType='Password'
          errorText={passwordErrorText}
          onChangeText={this.onChangeText(FieldType.Password, 'password')}
          value={this.state.password}
          onSubmitEditing={this.onFieldChange(FieldType.Password, password)}
        />
        <View style={styles.fieldMargin} />
        <NButton title='Sign in!' onPress={this.onPressLogin}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent',
    padding: 20
  },
  fieldMargin: {
    height: 10
  }
})

export default Form
