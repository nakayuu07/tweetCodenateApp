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
           <ul>
             <li><Home /></li>
             <li><Search /></li>
             <li><Bel /></li>
             <li><Box /></li>
           </ul>
        </div>
      )
    }

  }
}

export default Footer
