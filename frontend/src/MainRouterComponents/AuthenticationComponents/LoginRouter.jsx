import React from 'react';

import Login from './Login'
import Signup from './Signup'
import Top from './Top'
import Modal from 'react-modal'
import $ from 'jquery'

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


  handleSubmit(){
    console.log('click')
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
      <div className="main_body">
        <div className="main_inear">
          <Top />

          <div className="twiiter_login">
            <button onClick={() => this.handleSubmit()}>ツイッターログイン</button>
          </div>

          <div className="facebook_login">
          </div>

          <div className="app_login">
            <button onClick={this.OpenLogin}>ボタン</button>
          </div>

          <div className="no_app_id">
            <a onClick={this.OpenSignUp}>IDをお持ちでない方はこちらへ</a>
          </div>


          <Modal
           isOpen={modalIsOpen}
           style={customStyles}
           onRequestClose={this.closeModal}>
             {ModalComponent}
          </Modal>
        </div>
      </div>
      )
    }
  }

export default LoginRouter;
