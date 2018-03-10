import React from 'react';
import $ from 'jquery'

import Modal from 'react-modal'
import MyPageEdit from './MyPageEdit'
import MyTweet from './MyTweet'
import './mypage.css'

import AddUserInfo from './AddUserInfo'

class MyPageMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      age: '',
      sex: '',
      userNickNmae: '',
      userImage: '',
      editText: '文字を入力してね',
      file: null,
      userTweetData: [],
      userTweetSum: 0,
      following: 0,
      follower: 0,
      modalIsOpen: false,
    }
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001//users/mypage',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((res) =>{
      this.setState({ age: res.user_data.age,
                      sex: res.user_data.sex,
                      userNickNmae: res.user_data.nickname,
                      userImage: res.user_data.image,
                      userTweetData: res.user_tweet,
                      userTweetSum: res.user_tweet_sum,
                      following: res.user_following_sum,
                      follower: res.user_followers_sum})
    })
  }


  handleCloseModal(){
    this.setState({modalIsOpen: false})
  }


  render () {
    const userNickName = this.state.userNickNmae
    const userImage = this.state.userImage
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

    console.log(this.state)
    if(this.state.age===null || this.state.sex===null){
      this.setState({modalIsOpen: true})
    }


    return (
      <div>
        <div className="mypagemain">
          <div className="profile-image">
            <img src={userImage.url} width="100" height="100"/>
          </div>
          <div className="profile-content">
            <p>{userNickName}</p>
          </div>
          <div className="tweet_follow_info">
            <p>{this.state.userTweetSum}post</p>
            <p>{this.state.following}following</p>
            <p>{this.state.follower}followers</p>
          </div>
        </div>

        <div className="main_body">
          <div className="main_inear">
            <div className="tweet_contents">
              {this.state.userTweetData.map((data) =>{
                return(
                    <MyTweet data={data}/>
                )
              })}
            </div>
          </div>

          <Modal
            isOpen={modalIsOpen}
            style={customStyles}
            onRequestClose="">
            <AddUserInfo handleCloseModal={() => this.handleCloseModal()}/>
          </Modal>
        </div>
      </div>
    )
  }
}


export default MyPageMain
