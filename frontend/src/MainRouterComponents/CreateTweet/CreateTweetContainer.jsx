import React from 'react'
import $ from 'jquery'
import ItemListForTweet from './ClosetForTweet/ItemListForTweet'
import MayTweetTable from './MayTweet/MayTweetTable'
import './CreateTweet.css'
import MyClosetSelectorForTweet from './ClosetForTweet/MyClosetSelectorForTweet'

class CreateTweetContainer extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      Mydata: [],
      Tweethat: [],
      Tweettops: [],
      Tweetpants: [],
      Tweetshoes: [],
    }
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001//want_closets',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      this.setState({Mydata: results})
    })
  }

  MayTweetHat(hat) {
    // debugger
    this.setState({Tweethat: hat})
  }

  MayTweetTops(tops) {
    this.setState({Tweettops: tops})
  }

  MayTweetPants(pants) {
    this.setState({Tweetpants: pants})
  }

  MayTweetShoes(shoes) {
    this.setState({Tweetshoes: shoes})
  }

  render() {
    return(
      <div>
        <div className="May_tweet_table">
          <MayTweetTable data={this.state}/>
        </div>
        <MyClosetSelectorForTweet url={this.props.match.url} />
        <div className="main_body_tweet">
          <ItemListForTweet
            match={this.props.match}
            Mydata={this.state.Mydata}
            selectItemFunctionHat={(hat) => this.MayTweetHat(hat)}
            selectItemFunctionTops={(tops) => this.MayTweetTops(tops)}
            selectItemFunctionPants={(pants) => this.MayTweetPants(pants)}
            selectItemFunctionShoes={(shoes) => this.MayTweetShoes(shoes)}
          />
        </div>
      </div>
    )
  }
}

export default CreateTweetContainer
