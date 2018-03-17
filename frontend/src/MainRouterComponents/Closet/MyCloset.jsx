import React from 'react'
import MyClosetRouter from './MyClosetRouter'

class MyCloset extends React.Component {

  render() {
    return(
      <MyClosetRouter userClosetData ={this.props.userClosetData} path={this.props.match.path}/>
    )
  }
}

export default MyCloset
