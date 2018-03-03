import React from 'react'

class TweetShowTable extends React.Component{
  render(){
    return(
      <div>
        {this.props.tweetData.map((data)=>{
          return(
            <div>
              {data.hat_name}
            </div>
          )
        })}
      </div>
    )
  }
}

export default TweetShowTable
