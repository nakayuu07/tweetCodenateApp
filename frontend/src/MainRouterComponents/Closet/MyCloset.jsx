import React from 'react'
import MyClosetSelector from './MyClosetSelector'
import MyClosetRouter from './MyClosetRouter'

class MyCloset extends React.Component {

  render() {
    const url = this.props.match.url
    return(
      <div className="MyClosetBody">
        <MyClosetSelector url={url}/>
        <MyClosetRouter userClosetData ={this.props.userClosetData} path={this.props.match.path}/>
      </div>
    )
  }
}

export default MyCloset
