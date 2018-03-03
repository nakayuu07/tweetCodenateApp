import React from 'react';
import TweetShowTable from './TweetShowTable'
import $ from 'jquery'


class TweetShow extends React.Component {
  constructor() {
    super()
    this.state={
      Tweet_item: []
    }
  }


  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001//tweet_codes',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {

      this.setState({Tweet_item: results})
    })
  }


  render () {
    return (
      <div>
        <TweetShowTable tweetData={this.state.Tweet_item}/>
      </div>

    )
  }
}

export default TweetShow
