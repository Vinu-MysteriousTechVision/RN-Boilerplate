import NetInfo, {NetInfoData} from '@react-native-community/netinfo'
import React, { PureComponent } from 'react'
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, Dispatch } from 'redux'

import {NetworkListenerActions} from './Actions'

interface INetworkListenerViewDispatchProps {
  updateNetworkStatus: (isConnected: boolean) => void
}

interface INetworkListenerViewProps extends INetworkListenerViewDispatchProps {

}

interface INetworkListenerViewState {

}

class NetworkListenerView extends PureComponent<INetworkListenerViewProps, INetworkListenerViewState> {

  subscription: any

  constructor(props: INetworkListenerViewProps) {
    super(props)
  }

  componentDidMount() {
    // Subscribe
    this.subscription = NetInfo.addEventListener('connectionChange', this.listener)
  }

  listener = (data: NetInfoData) => {
    const {updateNetworkStatus} = this.props
    console.log('NetworkListenerView-listener: Connection type', data.type)
    console.log('NetworkListenerView-listener: Connection effective type', data.effectiveType)
    NetInfo.isConnected.fetch().then(isConnected => {
      console.log('Is connected', isConnected)
      updateNetworkStatus(isConnected)
    })
  }

  componentWillUnmount() {
    // Unsubscribe through remove
    this.subscription.remove()
  }

  render() {
    const { children } = this.props

    return children
  }
}

interface OwnProps {

}

// NOTE: dispatch Redux action from component's event. e.g. onPress: dispatch(actions.submit({}))
const mapDispatchToProps: MapDispatchToProps<INetworkListenerViewDispatchProps, OwnProps> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => ({
  updateNetworkStatus: (isConnected: boolean) => {
    dispatch(NetworkListenerActions.setNetworkStatus(isConnected))
  }
})

export const NetworkListenerViewContainer = connect(null, mapDispatchToProps, null, {})(NetworkListenerView)
