import React from 'react';
import Image from './gazo3.png'
class Logo extends React.Component {
  render () {
    return (
      <div className="logo">
        <img src={Image} alt="" height="50px" width="130px"/>
      </div>
    )
  }
}

export default Logo
