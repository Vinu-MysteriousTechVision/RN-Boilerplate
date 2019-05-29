import React, { PureComponent } from 'react'
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native'
import { styles } from './style'

interface IButtonProps {
  buttonStyle?: ViewStyle
  title: string
  onPress: () => void
}

export const NButton: React.SFC<IButtonProps> = props => {
  const {onPress, buttonStyle} = props
  return (
    <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
      <Text> {props.title} </Text>
    </TouchableOpacity>
  )
}

NButton.defaultProps = {
  title: 'Press'
}
