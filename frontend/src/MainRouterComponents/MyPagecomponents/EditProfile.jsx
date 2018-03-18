import React from 'react'
import $ from 'jquery'

class EditProfile extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      file: null,
      nickname: '',
      selfIntro: '',
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image',this.state.file)
    formData.append('nickname', this.state.nickname)
    formData.append('selfIntro', this.state.selfIntro)
    $.ajax({
      type: 'PATCH',
      url: 'http://localhost:3001//user_edits/selfIntro',
      data: formData,
      processData: false,
      contentType: false,
      headers: JSON.parse(sessionStorage.getItem('user')),
    })
    .done((results) =>{
      this.props.handleCloseModal()
    })

  }

  handleChangeNickname(e) {
    e.preventDefault()
    this.setState({nickname: e.target.value})
  }

  onChangeFile(e) {
    e.preventDefault()
    this.setState({file: e.target.files[0]})
  }

  handleChangeSelfIntro(e) {
    e.preventDefault()
    this.setState({selfIntro: e.target.value})
  }

  render() {
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <p>アバターを入力してください</p>
        <input type="file" onChange={(e) => this.onChangeFile(e)}/>
        <p>新しいニックネームを入力してください</p>
        <input type="text" value={this.state.nickname} onChange={(e) => this.handleChangeNickname(e)}/>
        <br/>
        <p>自己紹介文を入力してください</p>
        <textarea value={this.state.selfIntro} onChange={(e)=>this.handleChangeSelfIntro(e)} />
        <br/>
        <button type="submit">編集完了</button>
      </form>
    )
  }
}

export default EditProfile
