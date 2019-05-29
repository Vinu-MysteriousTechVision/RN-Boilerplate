import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import { NetworkReducer, NetworkState } from './components/NetworkListener'
import { AppRootReducer, AppRootState } from './screens/appRoot'
import { DemoListViewReducer, DemoListViewState } from './screens/demoListView'
import { IHomeState, reducer as homeReducer } from './screens/home'
import {LoginReducer, LoginState } from './screens/login'

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: []
}

const authPersistConfig = {
  key: 'app',
  storage,
  whitelist: ['isLogin']
}

export interface RootState {
  home: IHomeState
  app: AppRootState
  login: LoginState
  network: NetworkState
  demoListView: DemoListViewState
}

const rootReducer = combineReducers<RootState>({
  home: homeReducer,
  app: persistReducer<any, any>(authPersistConfig, AppRootReducer),
  login: LoginReducer,
  network: NetworkReducer,
  demoListView: DemoListViewReducer
})

export const persistedReducer = persistReducer<any, any>(
  rootPersistConfig,
  rootReducer
)
