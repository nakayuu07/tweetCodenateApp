import React from 'react'
import Modal from 'react-modal'
import {Tooltip} from 'react-tippy';
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
        <Tooltip html={(<div>評価が見れるよ！</div>)} position="bottom">
          <img src={this.props.data.code_image.url} onClick={() => this.handleChangeModal()}/>
        </Tooltip>
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
