import React from 'react'


class MyClosetPantsTableForTweet extends React.Component{
  handleSubmitMayTweet(pants) {
    this.props.selectItemFunctionPants(pants)
  }

  render() {
    return (
      <div className="closet-table">
        {this.props.data.map((pants) => {
          let pants_array = Object.keys(pants).map(key => pants[key])
          return(
            <div className="item-frame" key={pants.id} onClick={() => this.props.selectItemFunction(pants_array)}>
              <img alt='' src={pants.image} />
            </div>
          )
        })}
      </div>
    )
  }
}

export default MyClosetPantsTableForTweet
