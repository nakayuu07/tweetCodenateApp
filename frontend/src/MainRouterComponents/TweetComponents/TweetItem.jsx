import React from 'react'
import $ from 'jquery'

import TweetLikeButton from './TweetLikeButton'
import TweetUnLikeButton from './TweetUnLikeButton'
import TweetFollowButton from './TweetFollowButton'
import UserInfo from './UserInfo'


class TweetItem extends React.Component{
  constructor() {
    super()
    this.state={
      likeNum: 0,
      unlikeNum: 0,
    }
  }

  componentDidMount() {
    this.setState({
      likeNum: this.props.data[1],
      unlikeNum: this.props.data[2]
    })
  }

  handlePlusLike(num) {
    const PlusNum = num + 1
    this.setState({likeNum: PlusNum})
  }

  handleMinusLike(num) {
    const MinsNum = num - 1
    this.setState({likeNum: MinsNum})
  }

  handlePlusUnLike(num) {
    const PlusNum = num + 1
    this.setState({unlikeNum: PlusNum})
  }

  handleMinusUnLike(num) {
    const MinsNum = num - 1
    this.setState({unlikeNum: MinsNum})
  }



  render() {
    return(
      <div className="tweet_item">
        <UserInfo
          data={this.props.data[0]}
          userImage={this.props.data[3].image.url}
          userNickName={this.props.data[3].nickname}
          userSelfInfo={this.props.data[3].selfinfo}
          userFollowers={this.props.data[4]}
          userFollowing={this.props.data[5]}
          userTweetSum={this.props.data[6]}
        />

        <div className="show_tweet_info">
          <div className="tweet_code_image">
            <img src={this.props.data[0].code_image.url} alt="" height="200px" width="200px"/>
          </div>

          <table>
            <tr>
              <th>画像</th>
              <th>商品名</th>
            </tr>
            <tbody>
              <tr>
                <td><img src={this.props.data[0].hat_image} alt="" height="30px" width="30px"/></td>
                <td>{this.props.data[0].hat_name}</td>
              </tr>
              <tr>
                <td><img src={this.props.data[0].tops_image} alt="" height="30px" width="30px"/></td>
                <td>{this.props.data[0].tops_name}</td>
              </tr>
              <tr>
                <td><img src={this.props.data[0].pants_image} alt="" height="30px" width="30px"/></td>
                <td>{this.props.data[0].pants_name}</td>
              </tr>
              <tr>
                <td><img src={this.props.data[0].shoes_image} alt="" height="30px" width="30px"/></td>
                <td>{this.props.data[0].shoes_name}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="button">
          <TweetLikeButton
           data={this.props.data[0]}
           likeNum={this.state.likeNum}
           handlePlusLike={(num)=>this.handlePlusLike(num)}
           handleMinusLike={(num)=>this.handleMinusLike(num)}
           />
          <TweetUnLikeButton
            data={this.props.data[0]}
            unlikeNum={this.state.unlikeNum}
            handlePlusUnLike={(num)=>this.handlePlusUnLike(num)}
            handleMinusUnLike={(num)=>this.handleMinusUnLike(num)}
             />
          <TweetFollowButton data={this.props.data[0]} />
          <button>コメント</button>
        </div>

        <div className="num_like_unlike">
          <div>イイネ! {this.state.likeNum}件</div>
          <div>ワルイ! {this.state.unlikeNum}件</div>
        </div>
      </div>
    )
  }

}

export default TweetItem
