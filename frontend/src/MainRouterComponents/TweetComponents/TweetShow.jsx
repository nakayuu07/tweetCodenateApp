import React from 'react';
// import TweetShowTable from './TweetShowTable'
import $ from 'jquery'
import Code from './Code'
import Clothes from './Clothes'


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
      url: 'http://localhost:3001//home_tweet_codes',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      this.setState({Tweet_item: results})
    })
  }


  render () {
    return (
      <div>
        {this.state.Tweet_item.map((data)=>{
          console.log(data)
          return(
            <div>
            <Code codeImage={data.code_image.url}/>
            <Clothes data={data} key={data.id}/>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TweetShow
