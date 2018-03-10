import React from 'react';
import $ from 'jquery'

import MyPageEdit from './MyPageEdit'
import './mypage.css'

class MyPageMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userNickNmae: '',
      userImage: '',
      editText: '文字を入力してね',
      file: null
    }
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001//users/mypage',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((res) =>{
      this.setState({ userNickNmae: res.nickname,
                      userImage: res.image })
    })
  }

  hundleSubmitChange(e) {
    e.preventDefault()
    // const formData = new FormData();
    // formData.append('file',this.state.file)
    console.log(this.state.editText,this.state.file)
    const formData = new FormData();
    formData.append('image',this.state.file)
    formData.append('nickname', this.state.editText)
    $.ajax({
      type: 'PATCH',
      url: 'http://localhost:3001//users/mypageedit',
      data: formData,
      processData: false,
      contentType: false,
      headers: JSON.parse(sessionStorage.getItem('user')),
    })
    .done((res) =>{
      console.log(res)
    })
  }

  onChangeFile(e) {
    this.setState({file: e.target.files[0]})
  }

  onChangeEditText(e) {
    this.setState({editText: e.target.value })
  }

  render () {
    const userNickName = this.state.userNickNmae
    const userImage = this.state.userImage

    return (
      <div>
        <div className="mypagemain">
          <div className="profile-image">
            <img src={userImage.url} width="100" height="100"/>
          </div>
          <div className="profile-content">
            <p>{userNickName}</p>
            <button>プロフィール編集</button>
          </div>
          <div className="tweet_follow_info">
            <p>post</p>
            <p>followers</p>
            <p>following</p>
          </div>
        </div>
        
        <div className="main_body">
          <div className="main_inear">
          </div>
        </div>
      </div>
    )
  }
}


export default MyPageMain
