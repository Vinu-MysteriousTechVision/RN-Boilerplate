import { applyMiddleware, compose, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import thunk from 'redux-thunk'

import { persistedReducer, RootState } from './Reducer'

const actionLogger = (store: any) => (dispatch: any) => (action: any) => {

  console.log('An action occurred')
  console.log(action) // log the action being dispatched
  console.log(store.getState()) // log the current store

  dispatch(action)
}

const configureStore = () => {
  return createStore<RootState, any, any, any>(
    persistedReducer,
    applyMiddleware(thunk)
  )
}

export const store = configureStore()
export const persistor = persistStore(store)
