import React from 'react'
import MayTweetCard from './MayTweetCard'


class MayTweet extends React.Component{

  render() {
    const data = this.props.data
    return(
      <div>
        <MayTweetCard data={data}/>
      </div>
    )
  }
}

export default MayTweet
