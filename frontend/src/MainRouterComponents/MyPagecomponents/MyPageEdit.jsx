import React from 'react'

class MyPageEdit extends React.Component{
  render() {
    return(
      <div>
        <form onSubmit={this.props.hundleSubmitChange}>
          <p>アイコン</p>
          <input type="file" onChange={this.props.onChangeFile}/>
          <p>表示名</p>
          <input type="text" value={this.props.textData} onChange={this.props.onChangeEditText}/>
          <button type="submit">編集完了</button>
        </form>
      </div>
    )
  }
}

export default MyPageEdit
