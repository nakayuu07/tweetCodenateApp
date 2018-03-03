import React from 'react'
import { Link } from 'react-router-dom'

class MyClosetSelector extends React.Component{

  render() {
    return(
      <div className="MyClosetSelector">
        <span><Link to={`${this.props.url}/hat`}>帽子</Link></span>
        <span><Link to={`${this.props.url}/tops`}>ジャケット</Link></span>
        <span><Link to={`${this.props.url}/pants`}>パンツ</Link></span>
        <span><Link to={`${this.props.url}/shoes`}>靴</Link></span>
      </div>
    )
  }
}

export default MyClosetSelector
