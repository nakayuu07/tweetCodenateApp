import React from 'react';
import './top.css'

import TopHeader from './TopHeader'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import TopFooter from './TopFooter'

class Top extends React.Component {
  render () {
    return (
      <div className="top-body">
        <TopHeader />
        <Section3 />
        <Section2 />
        <Section1 />
        <Section4 />
        <TopFooter />
      </div>
    )
  }
}

export default Top
