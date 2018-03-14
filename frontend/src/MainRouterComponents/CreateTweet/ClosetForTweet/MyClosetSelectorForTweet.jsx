import React from 'react'
import { Link } from 'react-router-dom'
import FaAdjust from 'react-icons/lib/fa/adjust'


class MyClosetSelectorForTweet extends React.Component{

  render() {
    return(
      <div className="selector-item">
        <div><Link to={`${this.props.url}/hat`}><FaAdjust /></Link></div>
        <div><Link to={`${this.props.url}/tops`}><FaAdjust /></Link></div>
        <div><Link to={`${this.props.url}/pants`}><FaAdjust /></Link></div>
        <div><Link to={`${this.props.url}/shoes`}><FaAdjust /></Link></div>
      </div>
    )
  }
}

export default MyClosetSelectorForTweet
