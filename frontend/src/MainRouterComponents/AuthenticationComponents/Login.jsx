import React from 'react';
import $ from 'jquery';
import TextField from 'material-ui/TextField';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import RaisedButton from 'material-ui/RaisedButton';
import {grey900} from 'material-ui/styles/colors';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password:'',
    }
  }

  handleLogin = (e) => {
    e.preventDefault();
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001/auth/sign_in',
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
        }));
      console.log('successlog')
    })
  }

  render () {
    return (
      <div className="Login_form">
        <h2>Sign in</h2>
        <MuiThemeProvider>
         <div>
          <TextField
            hintText="email"
            name="email"
            underlineFocusStyle={{borderColor: grey900}}
            onChange = {(event,newValue) => this.setState({email:newValue})}
          />
          <br/>
          <TextField
            hintText="password"
            name="password"
            underlineFocusStyle={{borderColor: grey900}}
            onChange = {(event,newValue) => this.setState({password:newValue})}
          />
          <br/>
          <RaisedButton
            label="ログイン"
            labelColor={'#ffffff'}
            style={{margin:15}}
            backgroundColor='black'
            onClick={this.handleLogin}
            />
          </div>
        </MuiThemeProvider>
        <button onClick={this.props.closeModal}>close</button>
      </div>
    )
  }
}

export default Login
