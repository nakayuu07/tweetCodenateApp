import React from 'react'
import $ from 'jquery'
import {Tooltip} from 'react-tippy';

import TweetFollowRecomendButton from './TweetFollowRecomendButton'

class RecomendUser extends React.Component {
  constructor(){
    super()
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001/recomend_users',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) => {
      this.setState({users: results})
    })
  }


  render() {

    return(
      <div className="recomend-user">
        <div>おすすめユーザー</div>
        {this.state.users.map((data)=> {
          const tippyHtml = (
            <div className="tippy-user-info"  style={{ width: "220px" , backgroundColor: '#DCDCDC'}}>
              <div className="tippy-header">
                <img src={data[0].image.url} alt="" className="tippy-user-image"/>
                <div>{data[0].nickname}</div>
              </div>
              <div className="tippy-selfinfo">
                {data[0].selfinfo}
              </div>
              <div className="app-user-info">
                <div>
                  <div>ツイート</div>
                  <div>{data[1]}</div>
                </div>
                <div>
                  <div>フォロー</div>
                  <div>{data[2]}</div>
                </div>
                <div>
                  <div>フォロワー</div>
                  <div>{data[3]}</div>
                </div>
              </div>
            </div>
          )
          return(
            <div key={data[0].id} className="recomend-user-table">
              <Tooltip html={tippyHtml} position="bottom" >
                <img src={data[0].image.url} alt="" className="recomend-user-image"/>
              </Tooltip>
              <div>{data[0].nickname}</div>
              <TweetFollowRecomendButton data={data}/>
            </div>
          )
        })}
      </div>

    )
  }
}

export default RecomendUser
