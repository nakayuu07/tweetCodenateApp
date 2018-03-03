import React from 'react'
import $ from 'jquery'

class MayTweetTable extends React.Component{

  handleSubmitTweet = (data) => {
    console.log(this.props.data)
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001//tweet_codes',
      data: {params :{tweet_item_hat: this.props.data.Tweethat,
                      tweet_item_tops: this.props.data.Tweettops,
                      tweet_item_pants: this.props.data.Tweetpants,
                      tweet_item_shoes:this.props.data.Tweetshoes
                    }},
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      console.log('done')
    })
    .fail((data)=>{
      console.log('fails')
    })
  }

  render() {
    const data = this.props.data
    const Tweethat = this.props.data.Tweethat
    const Tweettops = this.props.data.Tweettops
    const Tweetpants = this.props.data.Tweetpants
    const Tweetshoes = this.props.data.Tweetshoes
    return(
      <table>
        <tbody>
          <span onClick={this.handleSubmitTweet}>投稿する</span>
          <span>ツイート＋投稿する</span>
          <tr>
            <td>{Tweethat}</td>
            <td>{Tweettops}</td>
            <td>{Tweetpants}</td>
            <td>{Tweetshoes}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default MayTweetTable
