import React from 'react'
import Modal from 'react-modal'
import DetailTweetCode from './DetailTweetCode'

class MyTweet extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      like: '',
      unlike: '',
      isMouseOver: false,
      modalIsOpen: false,
    }
  }

  handleMouseOver(){
    console.log('ovber')
    this.setState({isMouseOver: true})
  }

  handleMouseOut() {
    this.setState({isMouseOver: false})
  }


  render() {
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

    return(
      <div className="mytweet" onMouseOut={() => this.handleMouseOut()}>
        <img src={this.props.data.code_image.url} />
        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={this.closeModal}>
            <DetailTweetCode />
        </Modal>
      </div>
    )
  }
}

export default MyTweet
