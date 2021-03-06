import React from 'react'
import $ from 'jquery'

class FollowButton extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      buttonString: 'フォロー',
      is_follow: false,
      same_user: false,
      result: '',
    }
  }

  componentDidMount() {
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001/relationships',
      data: {params : {user_id: this.props.data.user_id }},
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results)=>{
      if(results.is_follow){
        this.setState({same_user: results.same_user,
                        is_follow: results.is_follow,
                      buttonString: 'フォロー中'})

      }else{
        this.setState({same_user: results.same_user,
                        is_follow: results.is_follow})
      }
    })
  }

  handleClick = () => {
    if(this.state.is_follow){
      $.ajax({
        type: 'DELETE',
        url:`http://localhost:3001/relationships/${this.props.data.user_id}`,
        headers: JSON.parse(sessionStorage.getItem('user'))
      })
      .done((results)=> {
        console.log(results)
      })

      this.setState({
        buttonString: 'フォロー',
        is_follow: false
      })
    }else{
      // フォロー作成
      $.ajax({
        type: 'POST',
        url: 'http://localhost:3001/relationships',
        data: {params: {user_id: this.props.data.user_id}},
        headers: JSON.parse(sessionStorage.getItem('user'))
      })
      .done((results)=> {
        console.log(results)
      })

      this.setState({
        buttonString: "フォロー中",
        is_follow: true
      });
    }
  }




  render(){
    if(this.state.same_user){
      return(
        <div></div>
      )
    }else{
      return(
        <div>
          <button onClick={this.handleClick}>{this.state.buttonString}</button>
        </div>
      )
    }
  }
}

export default FollowButton
