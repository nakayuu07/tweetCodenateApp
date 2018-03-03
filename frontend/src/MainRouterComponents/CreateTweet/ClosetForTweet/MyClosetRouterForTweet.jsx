import React from 'react'
import {Route} from 'react-router-dom'
import MyClosetHatTableForTweet from './MyClosetHatTableForTweet'
import MyClosetTopsTableForTweet from './MyClosetTopsTableForTweet'
import MyClosetPantsTableForTweet from './MyClosetPantsTableForTweet'
import MyClosetShoesTableForTweet from './MyClosetShoesTableForTweet'


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
      <div className="MyClosetTableUser">
        <Route exact path={`${path}/hat`} render={()=> <MyClosetHatTableForTweet data={hat} selectItemFunction={this.props.selectItemFunctionHat}/>} />
        <Route exact path={`${path}/tops`} render={()=> <MyClosetTopsTableForTweet data={tops} selectItemFunction={this.props.selectItemFunctionTops}/>} />
        <Route exact path={`${path}/pants`} render={()=> <MyClosetPantsTableForTweet data={pants} selectItemFunction={this.props.selectItemFunctionPants}/>} />
        <Route exact path={`${path}/shoes`} render={()=> <MyClosetShoesTableForTweet data={shoes} selectItemFunction={this.props.selectItemFunctionShoes}/>} />
      </div>
    )
  }
}

export default MyClosetRouter
