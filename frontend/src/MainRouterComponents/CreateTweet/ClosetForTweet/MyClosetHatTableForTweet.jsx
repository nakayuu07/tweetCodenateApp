import React from 'react'


class MyClosetHatTableForTweet extends React.Component{

  render() {
    return (
      <div className="closet-table">
        {this.props.data.map((hat) => {
          let hat_array = Object.keys(hat).map(key => hat[key])
          return(
            <div className="item-frame" key={hat.id} onClick={() => this.props.selectItemFunction(hat_array)}>
              <img alt='' src={hat.image} />
            </div>
          )
        })}
      </div>
    )
  }
}


export default MyClosetHatTableForTweet
