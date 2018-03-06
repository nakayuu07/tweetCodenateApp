import React from 'react'
import $ from 'jquery'
import ItemListForTweet from './ClosetForTweet/ItemListForTweet'
import MayTweet from './MayTweet/MayTweet'

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
      <div className="main_body">
        <MayTweet data={this.state}/>
        <ItemListForTweet
          match={this.props.match}
          Mydata={this.state.Mydata}
          selectItemFunctionHat={(hat) => this.MayTweetHat(hat)}
          selectItemFunctionTops={(tops) => this.MayTweetTops(tops)}
          selectItemFunctionPants={(pants) => this.MayTweetPants(pants)}
          selectItemFunctionShoes={(shoes) => this.MayTweetShoes(shoes)}
        />
      </div>
    )
  }
}

export default CreateTweetContainer
