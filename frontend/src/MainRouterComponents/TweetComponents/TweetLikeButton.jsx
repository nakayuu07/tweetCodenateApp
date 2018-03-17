import React from 'react'
import $ from 'jquery'
import FaThumbsUp from 'react-icons/lib/fa/thumbs-up'

class TweetLikeButton extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      buttonString: 'いいね',
      tweetData: [],
      already_like: false,
      colorLike: "#ccc"
    }
  }

componentDidMount(){
  this.setState({tweetData: this.props.data})
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3001/likes/',
    data: {params: {tweet_id: this.props.data.id}},
    headers: JSON.parse(sessionStorage.getItem('user'))
  })
  .done((results) => {
    if (results.already_likes === true){
      this.setState({already_like: results.already_likes,
                     buttonString: 'いいね済み',
                     colorLike: 'black'})

    }else{
      this.setState({already_like: results.already_likes})
    }
  })
}

handleSubmit() {
  if (this.state.already_like === false){
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001/likes/',
      data: {params: {tweet_data: this.state.tweetData}},
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results)=>{
      this.setState({already_like: true,
                      buttonString: 'いいね済み',
                      colorLike: 'black'})
      this.props.handlePlusLike(this.props.likeNum)
    })
  }else{
    $.ajax({
      type: 'DELETE',
      url: `http://localhost:3001/likes/${this.state.tweetData.id}`,
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      this.setState({already_like: false,
                     buttonString: 'いいね！',
                     colorLike: '#ccc'})
      this.props.handleMinusLike(this.props.likeNum)
    })
  }
}

  render() {
    return(
      <FaThumbsUp onClick={() => this.handleSubmit()} color={this.state.colorLike} size={25}/>
    )
  }
}

export default TweetLikeButton
