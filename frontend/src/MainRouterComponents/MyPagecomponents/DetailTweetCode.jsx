import React from 'react'
import $ from 'jquery'
import UserSexLike from './Graph/UserSexLike'
import UserSexUnLike from './Graph/UserSexUnLike'
import UserAgeLike from './Graph/UserAgeLike'
import UserAgeUnLike from './Graph/UserAgeUnLike'

class DetailTweetCode extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      likeAge: [],
      likeSex: [],
      unlikeAge: [],
      unlikeSex: []
    }
  }

  componentDidMount() {
    console.log('!!')
    $.ajax({
      type: 'GET',
      url: `http://localhost:3001//aggregate_infomations/${this.props.data.id}`,
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      console.log(results)
      this.setState({likeAge: results.like_of_age,
                     likeSex: results.like_of_sex,
                     unlikeAge: results.unlike_of_age,
                     unlikeSex: results.unlike_of_sex
                      })
    })
  }

  render() {
    console.log(this.state)
    return(
      <div className="graph">
        <UserSexLike likeSex={this.state.likeSex} />
        <UserSexUnLike unlikeSex={this.state.unlikeSex} />
        <UserAgeLike likeAge={this.state.likeAge} />
        <UserAgeUnLike unlikeAge={this.state.unlikeAge} />
      </div>
    )
  }
}

export default DetailTweetCode
