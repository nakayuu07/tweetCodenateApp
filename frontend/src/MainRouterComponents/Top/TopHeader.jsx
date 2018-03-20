import React from 'react';
import { withRouter } from 'react-router';

class TopHeader extends React.Component {
  handleToLoginPage() {
    this.props.history.push('/')
  }

  render () {
    return (
      <header className="top-header">
        <h1>What is MiLMiL</h1>
        <h3>あなたのファッション度を可視化するアプリ</h3>
        <div className="header-button" onClick={()=>this.handleToLoginPage()}>
          <p>MiLMiLを使ってみる</p>
        </div>
      </header>
    )
  }
}

export default withRouter(TopHeader)
