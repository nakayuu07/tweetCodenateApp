import React from 'react';
import { Link } from 'react-router-dom'

import './header.css'
import UserIcon from './UserIcon'
import MakeTweetButton from './MakeTweetButton'
import Logo from './Logo'

class Header extends React.Component {
  render () {
    return (
      <div className="header" id="header">
        <div className="header_title">
          <span><Link to="/mypage"><UserIcon /></Link></span>
          <span><Link to="/"><Logo /></Link></span>
          <span><Link to="/tweetcreate"><MakeTweetButton /></Link></span>
        </div>
      </div>
    )
  }
}

export default Header
