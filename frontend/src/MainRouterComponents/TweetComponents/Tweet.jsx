import React from 'react';
import TweetShow from './TweetShow'


class Tweets extends React.Component {
  render () {
    return (
      <div className="main_body">
        <div className="main_inear">
          <TweetShow />
        </div>
      </div>

    )
  }
}

export default Tweets