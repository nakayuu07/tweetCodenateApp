import React from 'react'


class MyClosetHatTableForTweet extends React.Component{

  render() {
    return (
      <table>
        <tbody>
        {this.props.data.map((hat) => {
          let hat_array = Object.keys(hat).map(key => hat[key])
          return(
            <tr key={hat.id} onClick={() => this.props.selectItemFunction(hat_array)}>
              <td><img alt='' src={hat.image} /></td>
              <td>{hat.makers}</td>
              <td>{hat.title}</td>
            </tr>
          )
        })}
        </tbody>
      </table>
    )
  }
}


export default MyClosetHatTableForTweet
