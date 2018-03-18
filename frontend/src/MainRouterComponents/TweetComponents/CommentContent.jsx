import React from 'react'
// import CommentForm from './CommentForm'
import update from 'react-addons-update';
import $ from 'jquery'
import CommentUserInfo from './CommentUserInfo'

class CommentContent extends React.Component {
  constructor() {
    super()
    this.state={
      commentInfo: [],
      commentValue: '',
    }
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: `http://localhost:3001/tweet_codes/${this.props.tweetId}/comments`,
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) =>{
      this.setState({commentInfo: results})
    })
  }

  handleStrValueChange(e) {
    this.setState({commentValue: e.target.value})
  }

  handleAddComment(e) {
    e.preventDefault()
    console.log('start')
    $.ajax({
      type: 'POST',
      url: `http://localhost:3001/tweet_codes/${this.props.tweetId}/comments`,
      data: {comment_value: this.state.commentValue},
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      const newData = update(this.state.commentInfo, {$push: results})
      this.setState({commentInfo: newData,
                     commentValue: ''})
    })
  }


  render() {
    return(
      <div>
        {this.state.commentInfo.map((data) => {
          return (
            <CommentUserInfo
             data={data} key={data[0].id}
             userFollowers={data[2]}
             userFollowing={data[3]}
             userTweetSum={data[4]}
             />
          )
        })}
        <hr/>
        <form className="comment-form" onSubmit={(e) => this.handleAddComment(e)}>
          <input
            className="comment-input"
            type="text"
            value={this.state.commentValue}
            placeholder="コメント追加..."
            onChange={e => this.handleStrValueChange(e)}
            />
        </form>
      </div>
    )
  }
}

export default CommentContent
