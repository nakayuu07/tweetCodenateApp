import React from 'react'


class MyClosetShoesTableForTweet extends React.Component{
  handleSubmitMayTweet(shoes) {
    this.props.selectItemFunctionShoes(shoes)
  }

  render() {
    return (
      <div className="closet-table">
        {this.props.data.map((shoes) => {
          let shoes_array = Object.keys(shoes).map(key => shoes[key])
          return(
            <div className="item-frame" key={shoes.id} onClick={() => this.props.selectItemFunction(shoes_array)}>
              <img alt='' src={shoes.image} />
            </div>
          )
        })}
      </div>
    )
  }
}


export default MyClosetShoesTableForTweet
