import React from 'react';
import TweetShow from './TweetShow'
import './tweet.css'
import $ from 'jquery'


class Tweets extends React.Component {
  constructor() {
    super()
    this.state={
      Tweet_item: []
    }
  }

  componentDidMount() {
    console.log('uoooo')
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001//home_tweet_codes',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      console.log(results)
      this.setState({Tweet_item: results})
    })
  }

  render () {
    return (
      <div className="tweet">
        <TweetShow Tweet_item={this.state.Tweet_item}/>
      </div>
    )
  }
}

export default Tweets
