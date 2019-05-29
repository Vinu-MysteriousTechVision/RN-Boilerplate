import React, { PureComponent } from 'react'
import { Text, TextInput, TouchableOpacity, View, ViewProps } from 'react-native'

import { NTextField } from '../NTextField'
import { styles } from './style'

interface INTextFieldProps {
  fieldType: string
  errorText: string
  NFormTextFieldRef: any
}

const isHaveError = (val: string) => {
  return (val.length > 0 && val !== '')
}

export const NFormTextField: React.SFC<INTextFieldProps> = props => {
  const {fieldType, errorText, NFormTextFieldRef} = props
  return (
    <View style={styles.container} >
      <Text style={styles.fieldTitle}>{fieldType}</Text>
      <TextInput
        style={styles.fieldInput}
        maxLength={40}
        placeholder={fieldType}
        {...props}
        ref={NFormTextFieldRef}
      />
      {isHaveError(errorText) &&
        <Text style={styles.errorField}>{errorText}</Text>
      }
      <View style={styles.separator} />
    </View>
  )
}

NFormTextField.defaultProps = {
  fieldType: 'Input the data',
  errorText: ''
}
