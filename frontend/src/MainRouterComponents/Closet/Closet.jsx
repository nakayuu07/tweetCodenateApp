import React from 'react';
import Modal from 'react-modal'
import $ from 'jquery'
import MyClosetSelector from './MyClosetSelector'

import ItemSearch from './ItemSearch'
import SearchResult from './SearchResult'
import MyCloset from './MyCloset'
import './closet.css'
import RegistratedItemSearchForm from './RegistratedItemSearchForm'
import RegistratItemForm from './RegistratItemForm'

class Closet extends React.Component {
  constructor() {
    super()
    this.state = {
      userClosetData: [],
      RegistratedmodalIsOpen: false,
      RegistratmodalIsOpen: false,
    }
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001//ware_registrations',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) =>{
      this.setState({ userClosetData: results })
    })
  }

  handleRegistratedmodalIsOpen() {
    this.setState({RegistratedmodalIsOpen: true})
  }

  handleRegistratmodalIsOpen() {
    this.setState({RegistratmodalIsOpen: true})
  }

  CloseSearchResult = () => this.setState(() => ({ RegistratedmodalIsOpen: false }))

  CloseRegistratResult = () => this.setState(() => ({ RegistratmodalIsOpen: false }))



  render () {
    const modalIsOpen = this.state.modalIsOpen
    const RegistratedmodalIsOpen = this.state.RegistratedmodalIsOpen
    const RegistratmodalIsOpen = this.state.RegistratmodalIsOpen
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
      <div className="closet-container">
        <div className="closet">

          <button onClick={()=>this.handleRegistratedmodalIsOpen()}>アイテムを検索する</button>
          <button onClick={()=>this.handleRegistratmodalIsOpen()}>アイテムをを登録する</button>

          <MyClosetSelector url={this.props.match.url}/>
          <div className="main_body_closet">
            <MyCloset userClosetData={this.state.userClosetData} match={this.props.match}/>

            <Modal isOpen={RegistratedmodalIsOpen} style={customStyles}>
              <RegistratedItemSearchForm
                CloseSearchResult={ this.CloseSearchResult }
              />
            </Modal>

            <Modal isOpen={RegistratmodalIsOpen} style={customStyles}>
              <RegistratItemForm CloseRegistratResult={this.CloseRegistratResult}/>
            </Modal>
          </div>
        </div>
      </div>
    )
  }
}

export default Closet
