let fs = require('fs')
const args = process.argv

const jsUcfirst = (featureName)  => {
    return featureName.charAt(0).toUpperCase() + featureName.slice(1)
}

const featureDir = args[2]
const feature = jsUcfirst(featureDir)

let dir = `./src/screens/${featureDir}`

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir)
}

const generateComponent = () => {
  const componentFile = `${dir}/${feature}.component.tsx`
  const rnce = `import React, { Component } from 'react'
import { Text, View } from 'react-native'
import {Styles} from './style'

export interface I${feature}StateProps {}

export interface I${feature}DispatchProps {}

interface I${feature}Props extends I${feature}StateProps, I${feature}DispatchProps {}

interface I${feature}State {}

export class ${feature} extends Component<I${feature}Props, I${feature}State> {

  constructor(props: I${feature}Props) {
    super(props)
  }

  render() {
    return (
      <View style={Styles.container}>
        <Text> textInComponent </Text>
      </View>
    )
  }
}

export default ${feature}
`
  fs.writeFileSync(componentFile, rnce, 'utf8')
}

const generateContainer = () => {
  const componentFile = `${dir}/${feature}.container.ts`
  const rnce = `import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { RootState } from '../../reducer'

import {
  ${feature},
  I${feature}DispatchProps,
  I${feature}StateProps
} from './${feature}.component'

interface OwnProps {}

// NOTE: get required value for this screen from Redux's State, and map it to the interface Component wants.
const mapStateToProps: MapStateToProps<
  I${feature}StateProps,
  OwnProps,
  RootState
> = (state: RootState, ownProps: OwnProps) => {
  return {}
}

// NOTE: dispatch Redux action from component's event. e.g. onPress: dispatch(actions.submit({}))
const mapDispatchToProps: MapDispatchToProps<
  I${feature}DispatchProps,
  OwnProps
> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => ({})

export const ${feature}Container = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {}
)(${feature})
`
  fs.writeFileSync(componentFile, rnce, 'utf8')
}

const generateAction = () => {
  const componentFile = `${dir}/Actions.ts`
  const rnce = `import { Dispatch } from 'redux'
import actionCreatorFactory from 'typescript-fsa'
import { RootState } from '../../Reducer'

const actionCreator = actionCreatorFactory()

const DemoAction = actionCreator<{}>('Home/Update_Count')

const DemoAsyncAction = (): any => {
  return async (dispatch: Dispatch<any>, getState: () => RootState) => {
    dispatch(DemoAction({}))
  }
}

export const ${feature}Actions = {
  DemoAction,
  DemoAsyncAction
}
`
  fs.writeFileSync(componentFile, rnce, 'utf8')
}

const generateReducer = () => {
  const componentFile = `${dir}/Reducers.ts`
  const rnce = `import { reducerWithInitialState } from 'typescript-fsa-reducers'
import { ${feature}Actions } from './Actions'

export interface ${feature}State {
  count: number
}

const initialState: ${feature}State = {
  count: 0
}

const DemoActionHandler = (state: ${feature}State, payload: {}): ${feature}State => {
  return {
    ...state,
    count: state.count + 1
  }
}

export const ${feature}Reducer = reducerWithInitialState(initialState)
  .case(${feature}Actions.DemoAction, DemoActionHandler)
  .build()
`
  fs.writeFileSync(componentFile, rnce, 'utf8')
}

const generateIndex = () => {
  const componentFile = `${dir}/index.ts`
  const rnce = `
export * from './Reducers'
export * from './Actions'
export * from './${feature}.container'
`
  fs.writeFileSync(componentFile, rnce, 'utf8')
}

const generateStyle = () => {
  const componentFile = `${dir}/style.ts`
  const rnce = `
import { StyleSheet } from 'react-native'

export const Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default Styles
`
  fs.writeFileSync(componentFile, rnce, 'utf8')
}

generateStyle()
generateIndex()
generateComponent()
generateContainer()
generateAction()
generateReducer()
