import React from 'react';
import TweetItem from './TweetItem'


class TweetShow extends React.Component {

  render () {
    return (
      <div className="tweet_items">
        {this.props.Tweet_item.map((data)=>{
          return(
            <TweetItem  data={data}  key={data.id}/>
          )
        })}
      </div>
    )
  }
}

export default TweetShow
