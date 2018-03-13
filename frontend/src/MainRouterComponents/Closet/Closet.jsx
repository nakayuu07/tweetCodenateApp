import React from 'react';
import Modal from 'react-modal'
import axios from 'axios'
import $ from 'jquery'

import ItemSearch from './ItemSearch'
import SearchResult from './SearchResult'
import MyCloset from './MyCloset'
import './closet.css'

class Closet extends React.Component {
  constructor() {
    super()
    this.state = {
      item: '入力してください',
      data: [],
      userClosetData: [],
      modalIsOpen: false
    }
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001//want_closets',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) =>{
      this.setState({ userClosetData: results })
    })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      axios.get('http://localhost:3001/wear_items', { params: { search: this.state.item } })
      .then((results) => {
        this.setState({ data: results.data })
        this.setState({ modalIsOpen: true })
      })
      .catch(() => {
        console.log('通信に失敗しました')
      })
    }

  CloseSearchResult = () => this.setState(() => ({ modalIsOpen: false }))

  handlePlaceChange = (item) => this.setState(() => ({ item }))


  render () {
    const modalIsOpen = this.state.modalIsOpen
    Modal.setAppElement('div')
    const customStyles = {
      content : {
        top                   : '40%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-20%',
        transform             : 'translate(-50%, -50%)'
      }
    }

    return (
      <div className="main_body">
        <ItemSearch item={this.state.item} handlePlaceChange={ this.handlePlaceChange } handleSubmit={ this.handleSubmit }  />
        <div className="main_inear">
          <MyCloset userClosetData={this.state.userClosetData} match={this.props.match}/>
          <Modal isOpen={modalIsOpen} style={customStyles}>
             <SearchResult data={ this.state.data } CloseSearchResult={ this.CloseSearchResult }/>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Closet
