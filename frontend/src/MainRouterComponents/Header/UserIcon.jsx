import React from 'react';
import $ from 'jquery'


class UserIcon extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userIcon: '',
    }
  }

  componentDidMount(){
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001//users/header',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      this.setState({userIcon: results.user_data.image.url})
    })
  }

  render () {
    return (
      <div className="userIcon">
        <img src={this.state.userIcon} height="50" width="50"/>
      </div>
    )
  }
}

export default UserIcon
