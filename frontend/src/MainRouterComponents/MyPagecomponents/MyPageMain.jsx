import React from 'react';
import $ from 'jquery'

import Modal from 'react-modal'
import MyPageEdit from './MyPageEdit'
import MyTweet from './MyTweet'
import './mypage.css'
import MyInfo from './MyInfo'

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
      selfintro: ''
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
                      follower: res.user_followers_sum,
                      selfintro: res.user_data.selfinfo})
      if(this.state.age===null || this.state.sex===null){
        this.setState({modalIsOpen: true})
      }
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


    return (
      <div>
        <MyInfo
         selfintro={this.state.selfintro}
         userImage={userImage.url}
         userNickName={userNickName}
         userTweetSum={this.state.userTweetSum}
         following={this.state.following}
         follower={this.state.follower}
         />

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
