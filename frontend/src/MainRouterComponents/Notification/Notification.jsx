import React from 'react';
import $ from 'jquery'
import './notification.css'
import TweetTable from './tweetTable'

class notification extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      remaining: 0,
      tweetData: [],
    }
  }

  componentDidMount() {
    console.log('aaa')
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001/realize_following_tweets',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) =>{
      this.setState({tweetData: results.params.yet_replay_tweet,
                     remaining: results.params.sum_yet_replay_tweet})
    })
  }


  handleSubmitLike(tweetData, num) {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001//realize_following_tweets',
      data: {params: {tweet_data: tweetData,
                      'taste': 'like'}},
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      const minsNum = num - 1
      this.setState({remaining: minsNum,
                     tweetData: this.state.tweetData.slice(0,[this.state.tweetData.length-1])})
    })
  }

  handleSubmitUnLike(tweetData, num) {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001//realize_following_tweets',
      data: {params: {tweet_data: tweetData,
                      'taste': 'unlike'}},
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      const minsNum = num - 1
      this.setState({remaining: minsNum,
                     tweetData: this.state.tweetData.slice(0,[this.state.tweetData.length-1])})
    })
  }


  render () {
    return (
      <div className="notifi_body">
        <div>
          あなたの評価を待っているTweetが{this.state.remaining}枚あります。
        </div>

        <div className="tweet_item">
          {this.state.tweetData.map((data) => {
            return(
              <TweetTable
                data={data}
                key={data.id}
                remaining={this.state.remaining}
                handleSubmitLike={(tweetData, num) => this.handleSubmitLike(tweetData, num)}
                handleSubmitUnLike={(tweetData, num) => this.handleSubmitUnLike(tweetData, num)}
                 />

            )
          })}
        </div>
      </div>

    )
  }
}

export default notification
