import React from 'react';
import $ from 'jquery'

import MyPageEdit from './MyPageEdit'

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
    console.log(userImage)

    // if(this.state.userNickNmae === null){
    //   console.log('1')
    //   const userNickName = this.state.userNickNmae
    // } else {
    //   console.log('2')
    //   const userNickName = '名前が登録されてません'
    // }
    //
    // if(this.state.userImage === null){
    //   console.log('3')
    //   const userImage = this.state.userImage
    //   const userImageAlt = "image"
    // } else {
    //   console.log('4')
    //   const userImageAlt = "画像を登録してくだい"
    // }
    // console.log(userNickName,userImage,userImageAlt)

    return (
      <div className="main_body">
        <div className="main_inear">
        <div>
          <p>{userNickName}</p>
          <img src={userImage.url} alt=""/>
        </div>
        <button onClick={() => this.hundleSubmitChange()}>User編集</button>
        <MyPageEdit
           textData={this.state.editText}
           onChangeEditText={(e) => this.onChangeEditText(e)}
           hundleSubmitChange={(e)=> this.hundleSubmitChange(e)}
           onChangeFile={(e) => this.onChangeFile(e)}
           />
        </div>
      </div>
    )
  }
}


export default MyPageMain
