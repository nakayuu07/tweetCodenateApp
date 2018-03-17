import React from 'react';

import Login from './Login'
import Signup from './Signup'
import Modal from 'react-modal'
import $ from 'jquery'
import Image from './Artboard.png'
import './login.css'

class LoginRouter extends React.Component {
  constructor() {
    super()
    this.state = {
      whichComponent: '',
      modalIsOpen: false
    }
  }

  OpenLogin = () => this.setState(() => ({ whichComponent: 'Login', modalIsOpen: true }))
  OpenSignUp = () => this.setState(() => ({ whichComponent: 'SignUp', modalIsOpen: true }))
  closeModal = () => this.setState(() => ({ modalIsOpen: false }))

  ComponentSet (modalIsOpen) {
    if (this.state.whichComponent === "Login") {
        return <Login modalIsOpen={modalIsOpen} closeModal={this.closeModal} />;
      } else if (this.state.whichComponent === "SignUp") {
        return <Signup modalIsOpen={modalIsOpen} closeModal={this.closeModal} />;
      }
  }

  componentDidMount() {
  }


  handleSubmit(){
    $.ajax({
      type: 'GET',
      dataType: 'jsonp',
      crossDomain: true,
      url:  'http://localhost:3001/auth/twitter',
      headers: {
        'Access-Controll-Allow-Headers': "*",
        'Content-Type': ''
      }
    })
    .done((data)=>{
      console.log(data)
    })
    .catch((results)=>{
      console.log(results)
    })
  }

  render() {
    const modalIsOpen = this.state.modalIsOpen
    const ModalComponent = this.ComponentSet(modalIsOpen)
    Modal.setAppElement('div')
    const customStyles = {
      content : {
        top                   : '40%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-20%',
        transform             : 'translate(-50%, -50%)'
      }
    }


    return (
        <div className="login-page">
          <img src={Image} alt="" height="250@px" width="500px"/>
          <div className="login-buttons">
            <div>
              <a href="#" class="square_btn">
              	<span onClick={this.OpenLogin}>BUTTON</span>
              </a>
            </div>

            <div className="no_app_id">
              <a onClick={this.OpenSignUp}>IDをお持ちでない方はこちらへ</a>
            </div>
          </div>


          <Modal
           isOpen={modalIsOpen}
           style={customStyles}
           onRequestClose={this.closeModal}>
             {ModalComponent}
          </Modal>
        </div>
      )
    }
  }

export default LoginRouter;
