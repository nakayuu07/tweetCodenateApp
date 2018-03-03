import React from 'react'
import {Route} from 'react-router-dom'
import MyClosetHatTable from './MyClosetHatTable'
import MyClosetTopsTable from './MyClosetTopsTable'
import MyClosetPantsTable from './MyClosetPantsTable'
import MyClosetShoesTable from './MyClosetShoesTable'


class MyClosetRouter extends React.Component{
  render() {
    const path = this.props.path
    const userClosetData = this.props.userClosetData
    const hat = userClosetData.filter((data) => {
      return (data.itemtype==='hat')
    })
    const tops = userClosetData.filter((data)=>{
      return (data.itemtype==='jacket-outerwear')
    })
    const pants = userClosetData.filter((data)=>{
      return (data.itemtype==='pants')
    })
    const shoes = userClosetData.filter((data)=>{
      return (data.itemtype==='shoes')
    })
    return (
      <div>
        <Route exact path={`${path}/hat`} render={()=> <MyClosetHatTable data={hat} />} />
        <Route exact path={`${path}/tops`} render={()=> <MyClosetTopsTable data={tops} />} />
        <Route exact path={`${path}/pants`} render={()=> <MyClosetPantsTable data={pants} />} />
        <Route exact path={`${path}/shoes`} render={()=> <MyClosetShoesTable data={shoes} />} />
      </div>
    )
  }
}

export default MyClosetRouter
