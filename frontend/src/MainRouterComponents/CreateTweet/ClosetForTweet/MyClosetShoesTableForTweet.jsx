import React from 'react'


class MyClosetShoesTableForTweet extends React.Component{
  handleSubmitMayTweet(shoes) {
    this.props.selectItemFunctionShoes(shoes)
  }

  render() {
    return (
      <table>
        <tbody>
        {this.props.data.map((shoes) => {
          let shoes_array = Object.keys(shoes).map(key => shoes[key])
          return(
            <tr key={shoes.id} onClick={() => this.props.selectItemFunction(shoes_array)}>
              <td><img alt='' src={shoes.image} /></td>
              <td>{shoes.makers}</td>
              <td>{shoes.title}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}


export default MyClosetShoesTableForTweet
