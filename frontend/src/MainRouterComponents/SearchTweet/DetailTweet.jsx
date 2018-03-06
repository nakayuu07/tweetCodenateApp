import React from 'react'
import FollowButton from './FollowButton'

class DetailTweet extends React.Component {
  render() {
      console.log(this.props.modalData)
      const data = this.props.modalData[0]
    return(
        <div className="detailTable">
          <img src={data.code_image.url} alt="" className="DetailShowCode"/>
          <div>
            <table>
              <tr>
                <th>画像</th>
                <th>名前</th>
              </tr>
              <tbody>
                <tr>
                  <td><img src={data.hat_image} alt=""/></td>
                  <td>{data.hat_name}</td>
                </tr>
                <tr>
                  <td><img src={data.tops_image} alt=""/></td>
                  <td>{data.tops_name}</td>
                </tr>
                <tr>
                  <td><img src={data.pants_image} alt=""/></td>
                  <td>{data.pants_name}</td>
                </tr>
                <tr>
                  <td><img src={data.shoes_image} alt=""/></td>
                  <td>{data.shoes_name}</td>
                </tr>
              </tbody>
            </table>

            <div className="detailUser">
              {this.props.modalUser.name}
              <FollowButton data={data}/>
            </div>
          </div>
        </div>
    )
  }
}

export default DetailTweet
