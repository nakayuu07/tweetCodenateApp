import React from 'react'

class DetailTweet extends React.Component {
  render() {
      console.log(this.props.modalData)
      const data = this.props.modalData[0]
      debugger
    return(
        <div>
          <img src={data.code_image.url} alt="" className="DetailShowCode"/>
          <div>
            <table>
              <tr>
                <th>画像</th>
                <th></th>
              </tr>
              <tr>
                <td>{}</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </table>
          </div>
        </div>
    )
  }
}

export default DetailTweet
