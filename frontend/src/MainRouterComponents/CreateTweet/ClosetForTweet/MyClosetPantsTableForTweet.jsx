import React from 'react'


class MyClosetPantsTableForTweet extends React.Component{
  handleSubmitMayTweet(pants) {
    this.props.selectItemFunctionPants(pants)
  }

  render() {
    console.log(this.props)
    return (
      <table>
        <tbody>
        {this.props.data.map((pants) => {
          let pants_array = Object.keys(pants).map(key => pants[key])
          return(
            <tr key={pants.id} onClick={() => this.props.selectItemFunction(pants_array)}>
              <td><img alt='' src={pants.image} /></td>
              <td>{pants.makers}</td>
              <td>{pants.title}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}

export default MyClosetPantsTableForTweet
