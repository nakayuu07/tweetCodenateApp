import React from 'react'
import $ from 'jquery'

class FollowButton extends React.Component{
  constructor(props) {
    super(props)
    this.state={
      buttonString: 'フォロー',
      toggle: false,
      result: ''
    }
  }

  componentWillMount() {
    debugger
    $.ajax({
      type: 'GET',
      url: 'http://localhost:3001/relationships',
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results)=>{
      console.log(results)
      this.setState({result: results})
    })
  }



  handleClick = () => {
    if(this.state.toggle){
      this.setState({
        buttonString: 'フォロー',
        toggle: false
      })
    }else{
      this.setState({
        buttonString: "フォロー中",
        toggle: true
        });
    }
  }




  render(){
    return(
      <div>
        <button onClick={this.handleClick}>{this.state.buttonString}</button>
      </div>
    )
  }
}

export default FollowButton
