import React, { Component } from 'react'
import { FlatList, RefreshControl, View } from 'react-native'
import Spinner from 'react-native-loading-spinner-overlay'

import {DemoListItem} from './DemoListItem.component'
import {Styles} from './style'

export interface IDemoListViewStateProps {
  listData: any[]
}

export interface IDemoListViewDispatchProps {
  getDataList: (successCallback: () => void, errorCallback: () => void) => void
  navigateToDetailsScreen: (navigationGoBackListener: () => void) => void
  setSelectedItem: (item: any) => void
}

interface IDemoListViewProps extends IDemoListViewStateProps, IDemoListViewDispatchProps {
  data: any[]
}

interface IDemoListViewState {
  isLoading: boolean
  selected: any
}

export class DemoListView extends Component<IDemoListViewProps, IDemoListViewState> {

  static navigationOptions = {
    title: 'List View',
  }

  constructor(props: IDemoListViewProps) {
    super(props)
    this.state = {
      selected: new Map(),
      isLoading: false
    }
  }

  onPressItem = (item: any) => {
    // updater functions are preferred for transactional updates
    this.setState((state) => {
      // copy the map rather than modifying state.
      const selected = new Map(state.selected)
      selected.set(item.id, !selected.get(item.id)) // toggle
      return {selected}
    })
    this.props.setSelectedItem(item)
    this.props.navigateToDetailsScreen(this.navigationGoBackListener)
  }

  navigationGoBackListener = () => {
    this.setState({
      selected: new Map()
    })
    this.refreshList()
  }

  /**
   * Handle the loading status functionality
   */
  updateLoaderStatus = (status: boolean) => {
    this.setState({
      isLoading: status
    })
  }

  /**
   * Handle the API Success callback functionality
   */
  successCallback = () => {
    this.updateLoaderStatus(false)
  }

  /**
   * Handle the API Success callback functionality
   */
  errorCallback = () => {
    this.updateLoaderStatus(false)
  }

  getDataList = () => {
    const {getDataList, listData} = this.props
    this.updateLoaderStatus(true)
    getDataList(this.successCallback, this.errorCallback)
  }

  initialSetup = () => {
    this.getDataList()
  }

  refreshList = () => {
    this.getDataList()
  }

  componentDidMount() {
    this.initialSetup()
  }

  renderItem = ({item}: any) => (
    <DemoListItem
      item={item}
      onPressItem={this.onPressItem}
      selected={!!this.state.selected.get(item.id)}
    />
  )

  renderSeparator = () => (<View style={{height: 1, backgroundColor: 'red'}} />)
  keyExtractor = (item: any, index: number) => index.toString()

  render() {
    const {listData} = this.props
    const {isLoading} = this.state

    return (
      <View style={Styles.container}>
        <Spinner visible={isLoading}/>
        <FlatList
          data={listData}
          extraData={this.state}
          keyExtractor={this.keyExtractor}
          ItemSeparatorComponent={this.renderSeparator}
          renderItem={this.renderItem}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={this.refreshList}
              tintColor='#FF0000'
              titleColor='#224455'
            />
          }
        />
      </View>
    )
  }
}

export default DemoListView
