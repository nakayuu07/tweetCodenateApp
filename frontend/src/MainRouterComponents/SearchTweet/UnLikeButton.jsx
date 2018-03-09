import React from 'react'
import $ from 'jquery'

class UnLikeButton extends React.Component{
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

export default UnLikeButton
