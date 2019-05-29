import React, { Component } from 'react'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { NetworkListenerViewContainer } from './components/NetworkListener'
import { Navigation } from './screens/navigation'
import { persistor, store } from './Store'

interface IStartProps {}

interface IStartState {}

export class Start extends Component<IStartProps, IStartState> {

  componentDidMount() {
    SplashScreen.hide()
  }

  public render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <NetworkListenerViewContainer>
            <Navigation />
          </NetworkListenerViewContainer>
        </PersistGate>
      </Provider>
    )
  }
}

export default Start
