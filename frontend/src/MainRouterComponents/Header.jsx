import React from 'react';
import { Link } from 'react-router-dom'

class Header extends React.Component {
  render () {
    return (
      <div className="header">
        <div className="header_title">
          <span><Link to="/mypage">アイコン</Link></span>
          <span><Link to="/">〇〇〇〇</Link></span>
          <span><Link to="/tweetcreate">+</Link></span>
        </div>
      </div>
    )
  }
}

export default Header
