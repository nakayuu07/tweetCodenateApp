import React from 'react';
import { Link } from 'react-router-dom'

import Home from 'react-icons/lib/md/home'
import Search from 'react-icons/lib/fa/search'
import Bel from 'react-icons/lib/fa/bell-o'
import Box from 'react-icons/lib/fa/archive'



class Footer extends React.Component {
  render () {
    if(sessionStorage.getItem('user')){
      return (
        <div className="footer">
           <ul className="footer_ul">
             <li><Link to="/tweets"><Home /></Link></li>
             <li><Link to="/search"><Search /></Link></li>
             <li><Link to="/notification"><Bel /></Link></li>
             <li><Link to="/closet"><Box /></Link></li>
           </ul>
        </div>
      )
    } else {
      return (
        <div className="footer">
          <div className="non-login-footer">
            みんなの投稿を見てみる
          </div>
        </div>
      )
    }

  }
}

export default Footer
