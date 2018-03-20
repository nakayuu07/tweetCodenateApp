import React from 'react'


class MyClosetTopsTableForTweet extends React.Component{
  handleSubmitMayTweet(Tops) {
    this.props.selectItemFunctionTops(Tops)
  }
  render() {
    return (
      <div className="closet-table">
        {this.props.data.map((Tops) => {
          let tops_array = Object.keys(Tops).map(key => Tops[key])
          return(
            <div className="item-frame" key={Tops.id} onClick={() => this.props.selectItemFunction(tops_array)}>
              <img alt='' src={Tops.image.url}/>
            </div>
          )
        })}
      </div>
    )
  }
}



export default MyClosetTopsTableForTweet
