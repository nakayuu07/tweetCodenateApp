import React from 'react'
import Modal from 'react-modal'
import DetailTweetCode from './DetailTweetCode'

class MyTweet extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      like: '',
      unlike: '',
      modalIsOpen: false,
    }
  }

  handleChangeModal() {
    this.setState({modalIsOpen: true})
  }


  render() {
    const modalIsOpen = this.state.modalIsOpen
    Modal.setAppElement('div')
    const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-20%',
        transform             : 'translate(-50%, -50%)'
      }
    }

    return(
      <div className="mytweet">
        <img src={this.props.data.code_image.url} onClick={() => this.handleChangeModal()}/>
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose="">
            <DetailTweetCode data={this.props.data} />
        </Modal>
      </div>
    )
  }
}

export default MyTweet
