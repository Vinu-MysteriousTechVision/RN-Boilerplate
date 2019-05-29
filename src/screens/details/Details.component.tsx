import React, { Component } from 'react'
import { Button, Platform, StyleSheet, Text, View } from 'react-native'
import { NButton } from '../../components'
import { LocalizedString } from '../../i18n'

export interface IDetailsStateProps {
  selectedData: any
}
export interface IDetailsDispatchProps {
  onBack: () => void
}

interface IDetailsProps extends IDetailsStateProps, IDetailsDispatchProps {
  navigation: any
}

interface IDetailsState {}

export class Details extends Component<IDetailsProps, IDetailsState> {

  static navigationOptions = ({ navigation }: any) => {
    return {
      title: 'Details',
      headerLeft: (
        <View style={{height: 40, width: 100, backgroundColor: 'red'}} >
          <Button
            onPress={navigation.getParam('onBackAction')}
            title='<- GoBack'
            color={Platform.OS === 'ios' ? '#fff' : undefined}
          />
        </View>
      ),
    }
  }

  constructor(props: IDetailsProps) {
    super(props)
  }

  onBackHandler = () => {
    const { navigation } = this.props

    const onGoBackAction = navigation.getParam('onGoBack')
    onGoBackAction()
    navigation.goBack()
  }

  componentDidMount() {
    this.props.navigation.setParams({ onBackAction: this.onBackHandler })
  }

  render() {
    const { onBack } = this.props

    return (
      <View style={styles.container}>
        <Text>{JSON.stringify(this.props.selectedData)}</Text>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Details
