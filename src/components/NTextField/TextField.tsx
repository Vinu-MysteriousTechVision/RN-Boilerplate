import React from 'react'
import { TextInput } from 'react-native'
import { styles } from './style'

interface INTextFieldProps {
  NFormTextFieldRef: any
}

export const NTextField: React.SFC<INTextFieldProps> = props => {
  const {NFormTextFieldRef} = props
  return (
    <TextInput
      style={styles.container}
      ref={NFormTextFieldRef}
      {...props}
    />
  )
}

NTextField.defaultProps = {}
