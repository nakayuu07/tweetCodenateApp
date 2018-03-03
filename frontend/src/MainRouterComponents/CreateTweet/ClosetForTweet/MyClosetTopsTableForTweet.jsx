import React from 'react'


class MyClosetTopsTableForTweet extends React.Component{
  handleSubmitMayTweet(Tops) {
    this.props.selectItemFunctionTops(Tops)
  }
  render() {
    return (
      <table>
        <tbody>
            {this.props.data.map((Tops) => {
              let tops_array = Object.keys(Tops).map(key => Tops[key])
              return(
                <tr key={Tops.id} onClick={() => this.props.selectItemFunction(tops_array)}>
                  <td><img alt='' src={Tops.image}/></td>
                  <td>{Tops.makers}</td>
                  <td>{Tops.title}</td>
                </tr>
              )
            })}
        </tbody>
      </table>
    )
  }
}



export default MyClosetTopsTableForTweet
