import React from 'react'
import ItemSearch from './ItemSearch'
import SearchResult from './SearchResult'
import axios from 'axios'

class RegistratedItemSearchForm extends React.Component{
  constructor() {
    super()
    this.state = {
      data: [],
      itemType: '',
      itemClass: '',
      item: 'アイテム名を入力してください',
    }
  }

  handleSubmit = (e) => {
      e.preventDefault()
      axios.get('http://localhost:3001/wear_items', { params: { itemType: this.state.itemType,
                                                                itemClass: this.state.itemClass,
                                                                itemName: this.state.item} })
      .then((results) => {
        this.setState({ data: results.data })
      })
      .catch(() => {
        console.log('通信に失敗しました')
      })
    }

  handlePlaceChange = (item) => this.setState(() => ({ item }))

  handleItemTypeChange = (event, index, value) => {
    this.setState({itemType: value})
  }

  handleItemClassChange = (event, index, value) => {
    this.setState({itemClass: value})
  }

  render() {
    return(
      <div>
        <ItemSearch
          itemType={this.state.itemType}
          itemClass={this.state.itemClass}
          item={this.state.item}
          handleItemTypeChange={this.handleItemTypeChange}
          handleItemClassChange={this.handleItemClassChange}

          handlePlaceChange={ this.handlePlaceChange }
          handleSubmit={ this.handleSubmit }
        />
        <SearchResult
          data={ this.state.data }
          CloseSearchResult={ this.props.CloseSearchResult }
        />


      </div>
    )
  }
}

export default RegistratedItemSearchForm
