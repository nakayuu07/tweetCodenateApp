import React from 'react'
import $ from 'jquery'

class AddUserInfo extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      radio: 1,
      age: 0,
      nickname: '',
      image: '',
      file: null,
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image',this.state.file)
    formData.append('nickname', this.state.nickname)
    formData.append('sex', this.state.radio)
    formData.append('age', this.state.age)
    $.ajax({
      type: 'PATCH',
      url: 'http://localhost:3001//users/mypageedit',
      data: formData,
      processData: false,
      contentType: false,
      headers: JSON.parse(sessionStorage.getItem('user')),
    })
    .done((res) =>{
      if(res.response===true){
        console.log('success')
        this.props.handleCloseModal()
      }else{
        console.log('fail')
      }
    })
  }

  handleChangeNumber(e) {
    e.preventDefault()
    this.setState({ age: e.target.value })
  }

  handleChangeNickname(e) {
    e.preventDefault()
    this.setState({nickname: e.target.value})
  }

  onChangeFile(e) {
    e.preventDefault()
    this.setState({file: e.target.files[0]})
  }

  render(){
    console.log(this.state.radio)
    return(
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <p>プロフィールを埋めてください</p>
        <input type="radio" name="q1" value="男"
          checked={this.state.radio === 0}
          onChange={() => this.setState({radio: 0})}/> 男
        <input type="radio" name="q1" value="女"
        checked={this.state.radio === 1}
        onChange={() => this.setState({radio: 1})}/> 女

        <p>年齢を入力してください</p>
        <input type="number" name="number" value={this.state.age} onChange={(e) => this.handleChangeNumber(e)}/>

        <p>ニックネームを入力してください</p>
        <input type="text" value={this.state.nickname} onChange={(e) => this.handleChangeNickname(e)}/>

        <p>アバターを入力してください</p>
        <input type="file" onChange={(e) => this.onChangeFile(e)}/>
        <button type="submit">編集完了</button>
      </form>
    )
  }
}

export default AddUserInfo
