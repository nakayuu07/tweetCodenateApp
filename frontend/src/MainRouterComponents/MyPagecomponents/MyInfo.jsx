import React from 'react'
import Modal from 'react-modal'

import EditProfile from './EditProfile'

class MyInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
    }
  }

  handleOpenModal() {
    this.setState({modalIsOpen: true})
  }

  handleCloseModal() {
    this.setState({modalIsOpen: false})
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

    return (
      <div className="mypagemain">
        <div className="profile-image">
          <img src={this.props.userImage} width="100" height="100"/>
        </div>

        <div className="my-user-info">
          <div className="profile-content">
            <div className="user-info-top">
              <p>{this.props.userNickName}</p>
              <button onClick={()=> this.handleOpenModal()}>プロフィール編集</button>
            </div>
          </div>

          <div className="tweet_follow_info">
            <p>{this.props.userTweetSum}post</p>
            <p>{this.props.following}following</p>
            <p>{this.props.follower}followers</p>
          </div>

          <div>
            {this.props.selfintro}
          </div>
        </div>

        <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose="">
          <EditProfile handleCloseModal={()=>this.handleCloseModal()}/>
        </Modal>
      </div>
    )
  }
}

export default MyInfo
