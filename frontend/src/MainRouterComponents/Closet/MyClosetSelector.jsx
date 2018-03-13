import React from 'react'
import { Link } from 'react-router-dom'
import FaBomb from 'react-icons/lib/fa/bomb'
import FaMotorcycle from 'react-icons/lib/fa/motorcycle'
import FaOdnoklassnikiSquare from 'react-icons/lib/fa/odnoklassniki-square'
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'
class MyClosetSelector extends React.Component{

  render() {
    return(
      <div className="myClosetSelector">
        <div><Link to={`${this.props.url}/hat`}><FaBomb /></Link></div>
        <div><Link to={`${this.props.url}/tops`}><FaMotorcycle /></Link></div>
        <div><Link to={`${this.props.url}/pants`}><FaThumbsOUp /></Link></div>
        <div><Link to={`${this.props.url}/shoes`}><FaOdnoklassnikiSquare /></Link></div>
      </div>
    )
  }
}

export default MyClosetSelector
