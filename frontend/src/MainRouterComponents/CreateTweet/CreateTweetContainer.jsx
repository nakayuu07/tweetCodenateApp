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
      url: 'http://localhost:3001//ware_registrations',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {

      this.setState({Mydata: results})
    })
  }

  MayTweetHat(hat) {
    this.setState({Tweethat: hat.map((a) => typeof(a) === 'object' ?  a.url : a)})
  }

  MayTweetTops(tops) {
    this.setState({Tweettops: tops.map((a) => typeof(a) === 'object' ?  a.url : a)})
  }

  MayTweetPants(pants) {
    this.setState({Tweetpants: pants.map((a) => typeof(a) === 'object' ?  a.url : a)})
  }

  MayTweetShoes(shoes) {
    this.setState({Tweetshoes: shoes.map((a) => typeof(a) === 'object' ?  a.url : a)})
  }

  render() {
    return(
      <div>
        <div className="May_tweet_table">
          <MayTweetTable
           data={this.state}
           Tweethat={this.state.Tweethat}
           Tweettops={this.state.Tweettops}
           Tweetpants={this.state.Tweetpants}
           Tweetshoes={this.state.Tweetshoes}
           history={this.props.history}/>
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
