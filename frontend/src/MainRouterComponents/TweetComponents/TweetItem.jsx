import React from 'react'
import $ from 'jquery'

class TweetItem extends React.Component{

  componentDidMount() {
    console.log(typeof this.props.data.id)
    $.ajax({
      type: 'GET',
      url: `http://localhost:3001/home_tweet_codes/${this.props.data.id}`,
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
  }

  render() {
    return(
      <div className="tweet_item">
      </div>
    )
  }

}

export default TweetItem
