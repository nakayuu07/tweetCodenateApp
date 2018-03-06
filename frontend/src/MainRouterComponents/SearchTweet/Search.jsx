import React from 'react';
import $ from 'jquery'
import Modal from 'react-modal'
import CodenateTable from './CodenateTable'
import DetailTweet from './DetailTweet'
import './search.css'


class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      tweetItem: [],
      tweetUser: [],
      modalIsOpen: false,
      modalData: [],
      modalUser: [],
    }
  }

  openModal = (id) => {
    const showData = this.state.tweetItem.filter((item) => {
      return (id === item.id)
    })
    const showUser = this.state.tweetUser.filter((user) => {
            return (user.id === showData[0].user_id)
        });
    this.setState({modalIsOpen: true, modalData: showData, modalUser: showUser[0]})
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001//tweet_codes',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      this.setState({tweetItem: results.tweet_items, tweetUser: results.tweet_relation_user})
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
            <DetailTweet modalData={this.state.modalData} modalUser={this.state.modalUser}/>
          </Modal>
        </div>
      </div>

    )
  }
}

export default Search
