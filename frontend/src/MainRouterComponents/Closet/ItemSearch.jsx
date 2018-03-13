import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';

class ItemSearch extends React.Component {
  render () {
    return (
    <div className="search-page">
      <MuiThemeProvider>
        <form className="search-form" onSubmit={e => this.props.handleSubmit(e)}>
          <TextField
           type="text"
           hintText ="アイテム検索"
           value= {this.props.data}
           onChange={e => this.props.handlePlaceChange(e.target.value)}
          />
        </form>
      </MuiThemeProvider>
    </div>
    )
  }
}

export default ItemSearch
