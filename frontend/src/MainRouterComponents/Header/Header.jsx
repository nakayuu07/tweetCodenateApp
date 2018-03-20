import React from 'react';
import { Link } from 'react-router-dom'

import './header.css'
import UserIcon from './UserIcon'
import MakeTweetButton from './MakeTweetButton'
import Logo from './Logo'

class Header extends React.Component {
  render () {
    if(sessionStorage.getItem('user')){
      return (
        <div className="header" id="header">
          <div className="header_title">
            <span><Link to="/mypage"><UserIcon /></Link></span>
            <span><Link to="/"><Logo /></Link></span>
            <span><Link to="/tweetcreate/hat"><MakeTweetButton /></Link></span>
          </div>
        </div>
      )
    }else{
      return(
        <div>
        </div>
      )
    }
  }
}

export default Header
