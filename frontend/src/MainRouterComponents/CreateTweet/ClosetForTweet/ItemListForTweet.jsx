import React from 'react'
import MyClosetRouterForTweet from './MyClosetRouterForTweet'


class ItemListForTweet extends React.Component{

  render() {
    const userClosetData = this.props.Mydata
    const url = this.props.match.url
    return(
      <div className="itemLists">
        <MyClosetRouterForTweet
          userClosetData={userClosetData}
          path={this.props.match.path}
          selectItemFunctionHat={this.props.selectItemFunctionHat}
          selectItemFunctionTops={this.props.selectItemFunctionTops}
          selectItemFunctionPants={this.props.selectItemFunctionPants}
          selectItemFunctionShoes={this.props.selectItemFunctionShoes}
          />
      </div>
    )
  }
}

export default ItemListForTweet
