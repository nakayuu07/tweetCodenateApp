import React from 'react'

class TweetShowTable extends React.Component{
  render(){
    return(
      <div>
        {this.props.tweetData.map((data)=>{
          console.log(data)
          return(
            <div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default TweetShowTable
