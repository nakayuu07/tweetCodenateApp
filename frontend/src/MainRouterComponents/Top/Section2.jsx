import React from 'react';
import $ from 'jquery'
import Modal from 'react-modal'
import TopDetailTweet from './TopDetailTweet'

class Section2 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tweetData: [],
      modalIsOpen: false,
    }
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001/most_fav_tweets'
    })
    .done((results) => {
      this.setState({tweetData: results})
    })
  }

  handleModalOpen() {
    this.setState({modalIsOpen: true})
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
      <section className="fav">
        <h2 className="heading"> こんなツイートが人気です</h2>
        <div className="tweet-wrapper">
          {this.state.tweetData.map((data) => {
            console.log(data)
            return(
              <div className="tweet-box" key={data.id}>
                <div className="tweet-img">
                  <img src={data.code_image.url} alt="" height="200px" width="200px"/>
                </div>
                <div className="tweet-botton">
                  <button onClick={()=>this.handleModalOpen()}>Read More</button>
                </div>
                <Modal
                  isOpen={modalIsOpen}
                  style={customStyles}
                  onRequestClose={this.closeModal}
                >
                <TopDetailTweet data={data}/>
                </Modal>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
}

export default Section2
