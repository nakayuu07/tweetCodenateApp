import React from 'react';
import $ from 'jquery'
import Modal from 'react-modal'
import CodenateTable from './CodenateTable'
import DetailTweet from './DetailTweet'
import './search.css'


class Search extends React.Component {
  constructor() {
    super()
    this.state={
      tweetItem: [],
      modalIsOpen: false,
      modalData: [],
    }
  }

  openModal = (id) => {
    const showData = this.state.tweetItem.filter((item) => {
      return (id === item.id)
    })
    this.setState({modalIsOpen: true, modalData: showData})
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001//tweet_codes',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      this.setState({tweetItem: results})
    })
  }

  closeModal() {

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
      <div className="main_body">
        <div className="main_inear">
          <div className="SearchTweet">
            {this.state.tweetItem.map((data)=>{
              return(
                <CodenateTable data={data} key={data.id} openModal={(id) => this.openModal(id)}/>
              )
            })}
          </div>

          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            onRequestClose={this.closeModal}
          >
            <DetailTweet modalData={this.state.modalData}/>
          </Modal>
        </div>
      </div>

    )
  }
}

export default Search
