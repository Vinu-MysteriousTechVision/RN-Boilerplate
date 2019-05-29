import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux'
import { Action, Dispatch } from 'redux'

import { RootState } from '../../reducer'

import {
  Details,
  IDetailsDispatchProps,
  IDetailsStateProps
} from './Details.component'

interface OwnProps {}

// NOTE: get required value for this screen from Redux's State, and map it to the interface Component wants.
const mapStateToProps: MapStateToProps<IDetailsStateProps, OwnProps, RootState> = (state: RootState, ownProps: OwnProps) => {
  const { selectedData } = state.demoListView
  return {
    selectedData
  }
}

// NOTE: dispatch Redux action from component's event. e.g. `onPress: dispatch(actions.submit({}))`
const mapDispatchToProps: MapDispatchToProps<
  IDetailsDispatchProps,
  OwnProps
> = (dispatch: Dispatch<Action>, ownProps: OwnProps) => ({})

export const DetailsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  {}
)(Details)
