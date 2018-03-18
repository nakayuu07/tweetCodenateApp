import React from 'react'
import {Tooltip} from 'react-tippy';
import TweetFollowCommentButton from './TweetFollowCommentButton'

class CommentUserInfo extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      userFollowers: 0,
    }
  }

  componentDidMount() {
    this.setState({userFollowers: this.props.userFollowers})
  }

  handleAddUserFollowers(num) {
    const Added = num + 1
    this.setState({userFollowers: Added})
  }

  handleMinusUserFollowers(num) {
    const Minused = num - 1
    this.setState({userFollowers: Minused})
  }


  render() {
    const  data = this.props.data
    const tippyHtml = (
      <div className="tippy-user-info"  style={{ width: "220px" , backgroundColor: '#DCDCDC'}}>
        <div className="tippy-header">
          <img src={data[1].image.url} alt="" className="tippy-user-image"/>
          <div>{data[1].nickname}</div>
          <TweetFollowCommentButton
             data={this.props.data}
             numFollowers={this.state.userFollowers}
             handleAddUserFollowers={(num)=>this.handleAddUserFollowers(num)}
             handleMinusUserFollowers={(num)=>this.handleMinusUserFollowers(num)} />
        </div>
        <div className="tippy-selfinfo">
          {data[1].selfinfo}
        </div>
        <div className="app-user-info">
          <div>
            <div>ツイート</div>
            <div>{this.props.userTweetSum}</div>
          </div>
          <div>
            <div>フォロー</div>
            <div>{this.props.userFollowing}</div>
          </div>
          <div>
            <div>フォロワー</div>
            <div>{this.state.userFollowers}</div>
          </div>
        </div>
      </div>
    )


    return(
      <div className="comment-erea" key={data[0].id}>
        <Tooltip html={tippyHtml} position="bottom" interactive>
          <img className="comment-user-image" src={data[1].image.url} alt="" height="25px" width="25px"/>
        </Tooltip>
        <div>
          {data[0].text}
        </div>
      </div>
    )
  }
}

export default CommentUserInfo
