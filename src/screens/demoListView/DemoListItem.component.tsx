import React, { PureComponent } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface IDemoListItemProps {
  onPressItem: (item: any) => void
  item: any
  selected: boolean
}

export class DemoListItem extends PureComponent<IDemoListItemProps, any> {
  onPress = () => {
    const {onPressItem, item} = this.props
    onPressItem(item)
  }

  render() {
    const { item } = this.props
    const textColor = this.props.selected ? 'red' : 'black'
    return (
      <TouchableOpacity style={{height: 50, paddingHorizontal: 20, paddingVertical: 5, backgroundColor: 'gray', justifyContent: 'center'}} onPress={this.onPress}>
        <Text style={{color: textColor}}>{item.title}</Text>
      </TouchableOpacity>
    )
  }
}
