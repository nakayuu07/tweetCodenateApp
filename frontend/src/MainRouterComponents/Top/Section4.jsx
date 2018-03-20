import React from 'react';
import { withRouter } from 'react-router';

class Section4 extends React.Component {
  handleToLoginPage() {
    this.props.history.push('/')
  }

  render () {
    return (
      <section className="start-app">
        <h2 className="heading">さっそく始めてみよう！</h2>

        <div className="start-app-wrapper">
          <div className="start-button" onClick={()=>this.handleToLoginPage()}>
            ログインページに移動する
          </div>
        </div>
      </section>
    )
  }
}

export default withRouter(Section4)
