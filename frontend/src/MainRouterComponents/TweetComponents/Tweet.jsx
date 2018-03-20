import React from 'react';
import TweetShow from './TweetShow'
import './tweet.css'
import $ from 'jquery'

import MyContent from './MyContent'
import RecomendUser from './RecomendUser'
import Modal from 'react-modal'

class Tweets extends React.Component {
  constructor() {
    super()
    this.state={
      Tweet_item: [],
      modalIsOpen: true,
    }
  }

  componentDidMount() {
    console.log('uoooo')
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001//home_tweet_codes',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      this.setState({Tweet_item: results})
    })
  }

  handleOpenModal() {
    this.setState({modalIsOpen: true})
  }

  handleCloseModal() {
    this.setState({modalIsOpen: false})
  }

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
      <div className="tweet">
        <div className="tweet_inear">
          <MyContent Tweet_item={this.state.Tweet_item}/>
          <TweetShow Tweet_item={this.state.Tweet_item}/>
          <RecomendUser />
        </div>
      </div>
    )
  }
}

export default Tweets
