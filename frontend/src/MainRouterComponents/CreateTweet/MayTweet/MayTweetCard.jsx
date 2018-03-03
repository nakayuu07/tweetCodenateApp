import React from 'react'
import MayTweetTable from './MayTweetTable'

class MayTweetCard extends React.Component{
  render() {
    return(
      <div>
        <MayTweetTable data={this.props.data}/>
      </div>
    )
  }
}

export default MayTweetCard
