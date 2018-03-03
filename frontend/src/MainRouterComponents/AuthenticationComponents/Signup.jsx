import React from 'react'
import $ from 'jquery'
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import {grey900} from 'material-ui/styles/colors';


class Signup extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password:'',
      errorMessages: [],
      isError: false
    }
  }

  handleSignUp = (e) => {
    e.preventDefault()
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001/auth',
      data: {
        email: this.state.email,
        password: this.state.password
      }
    })
    .done((response, status, jqXHR) => {
      sessionStorage.setItem('user',
        JSON.stringify({
          'access-token': jqXHR.getResponseHeader('access-token'),
          client: jqXHR.getResponseHeader('client'),
          uid: response.data.uid
        }))
      console.log('サインアップ成功！！')
      this.props.closeModal()
    }).catch((err) => {
      this.setError(err)
    })
  }

  onChangeEmailText(e) {
    this.setState({ email: e.target.value })
  }

  onChangePasswordText(e) {
    this.setState({ password: e.target.value })
  }

  setError(e) {
    this.setState({isError: true})
  }

  render () {
    return (
      <div className="signup_form">
        <h2>Sign Up</h2>
        <MuiThemeProvider>
         <div>
          <TextField
            hintText="email"
            name="email"
            value={this.state.email}
            underlineFocusStyle={{borderColor: grey900}}
            onChange={(e) => this.onChangeEmailText(e)}
          />
          <br/>
          <TextField
            hintText="password"
            name="password"
            value={this.state.password}
            underlineFocusStyle={{borderColor: grey900}}
            onChange={(e) => this.onChangePasswordText(e)} />
          <br/>
          <RaisedButton
            label="サインアップ"
            labelColor={'#ffffff'}
            style={{margin:15}}
            backgroundColor='black'
            onClick={(e) => this.handleSignUp(e)}
            />
          </div>
        </MuiThemeProvider>
        <button onClick={this.props.closeModal}>close</button>
          { (this.state.isError) ? 'valid' : "" }
      </div>
    )
  }
}

export default Signup
