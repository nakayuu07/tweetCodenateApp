import React from 'react'
import MyClosetRouter from './MyClosetRouter'

class MyCloset extends React.Component {

  render() {
    return(
      <div className="MyClosetBody">
        <MyClosetRouter userClosetData ={this.props.userClosetData} path={this.props.match.path}/>
      </div>
    )
  }
}

export default MyCloset
