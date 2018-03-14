import React from 'react'
import $ from 'jquery'

class TweetUnLikeButton extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      buttonString: '悪いね！',
      tweetData: [],
      already_unlike: false
    }
  }

componentDidMount(){
  this.setState({tweetData: this.props.data})
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3001/unlikes/',
    data: {params: {tweet_data: this.props.data.id}},
    headers: JSON.parse(sessionStorage.getItem('user'))
  })
  .done((results)=>{
    console.log(results)
    if(results.already_unlike === true){
      this.setState({already_unlike: true,
                      buttonString: '悪いね済み'})
    }
  })
}

handleSubmit() {
  if(this.state.already_unlike === false){
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001/unlikes/',
      data: {params: {tweet_data: this.state.tweetData.id}},
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results)=>{
      this.setState({already_unlike: true,
                    buttonString: '悪いね済み'})
      this.props.handlePlusUnLike(this.props.unlikeNum)
    })
  }else{
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:3001/unlikes/${this.state.tweetData.id}`,
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      this.setState({already_unlike: false,
                      buttonString: '悪いね！'})
      this.props.handleMinusUnLike(this.props.unlikeNum)
    })
  }
}

  render() {
    return(
      <div>
        <button onClick={() => this.handleSubmit()}>{this.state.buttonString}</button>
      </div>
    )
  }
}

export default TweetUnLikeButton
