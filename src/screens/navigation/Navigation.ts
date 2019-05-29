import { createAppContainer, createStackNavigator, createSwitchNavigator } from 'react-navigation'

import { Screens } from './AppScreens'
import * as screenNames from './ScreenNames'

const AppStack = createStackNavigator(
  {
    [screenNames.Home]: Screens.HomeContainer,
    [screenNames.DemoListView]: Screens.DemoListViewContainer,
    [screenNames.Details]: Screens.DetailsContainer
  },
  {
    initialRouteName: screenNames.Home
  }
)

const AuthStack = createStackNavigator(
  {
    [screenNames.AppLoginSignUp]: Screens.AppLoginSignUpContainer,
    [screenNames.Login]: Screens.LoginContainer
  },
  {
    initialRouteName: screenNames.AppLoginSignUp
  }
)

export const RootStack = createAppContainer(createSwitchNavigator(
  {
    AppRoot: Screens.AppRootContainer,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: screenNames.AppRoot
  }
))

export const Navigation = createAppContainer(RootStack)
