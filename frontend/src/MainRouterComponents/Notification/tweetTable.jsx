import React from 'react'

class TweetTable extends React.Component {
  render() {
    return(
      <div className="tweet_table">
        <div className="inner">
          <div className="user_image">
            <img src={this.props.data.code_image.url} alt=""/>
          </div>

          <table>
            <tr>
              <th>画像</th>
              <th>商品名</th>
            </tr>
            <tbody>
              <tr>
                <td><img src={this.props.data.hat_image} alt="" height="30px" width="30px"/></td>
                <td>{this.props.data.hat_name}</td>
              </tr>
              <tr>
                <td><img src={this.props.data.tops_image} alt="" height="30px" width="30px"/></td>
                <td>{this.props.data.tops_name}</td>
              </tr>
              <tr>
                <td><img src={this.props.data.pants_image} alt="" height="30px" width="30px"/></td>
                <td>{this.props.data.pants_name}</td>
              </tr>
              <tr>
                <td><img src={this.props.data.shoes_image} alt="" height="30px" width="30px"/></td>
                <td>{this.props.data.shoes_name}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="button">
          <button onClick={() => this.props.handleSubmitLike(this.props.data, this.props.remaining)}>イイネ！</button>
          <button onClick={() => this.props.handleSubmitUnLike(this.props.data, this.props.remaining)}>ワルイネ！</button>
        </div>
      </div>
    )
  }
}

export default TweetTable
