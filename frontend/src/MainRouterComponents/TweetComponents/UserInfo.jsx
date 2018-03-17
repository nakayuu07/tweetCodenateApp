import React from 'react'
import {Tooltip} from 'react-tippy';
import TweetFollowButton from './TweetFollowButton'



class UserInfo extends React.Component {
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
    console.log(this.props)
    const tippyHtml = (
      <div className="tippy-user-info"  style={{ width: "220px" , backgroundColor: '#DCDCDC'}}>
        <div className="tippy-header">
          <img src={this.props.userImage} alt="" className="tippy-user-image"/>
          <div>{this.props.userNickName}</div>
          <TweetFollowButton
             data={this.props.data}
             numFollowers={this.state.userFollowers}
             handleAddUserFollowers={(num)=>this.handleAddUserFollowers(num)}
             handleMinusUserFollowers={(num)=>this.handleMinusUserFollowers(num)} />
        </div>
        <div className="tippy-selfinfo">
          {this.props.userSelfInfo}
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
        <div className="tweet_user">
          <Tooltip html={tippyHtml} position="bottom" interactive>
            <img src={this.props.userImage} alt=""/>
          </Tooltip>
          <div>{this.props.userNickName}</div>
        </div>
    )
  }
}

export default UserInfo
