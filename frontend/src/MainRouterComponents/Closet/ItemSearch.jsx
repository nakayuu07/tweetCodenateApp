import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SelectItemClass from './SelectItemClass'

class ItemSearch extends React.Component {

  render () {
    return (
    <div className="search-page">
      <MuiThemeProvider>
        <form className="search-form" onSubmit={e => this.props.handleSubmit(e)}>
          <SelectField
            floatingLabelText="服のタイプを入力してください"
            value={this.props.itemType}
            onChange={this.props.handleItemTypeChange }
          >
            <MenuItem value={"hat"} primaryText="hat" />
            <MenuItem value={"tops"} primaryText="tops" />
            <MenuItem value={"pants"} primaryText="pants" />
            <MenuItem value={"shoes"} primaryText="shoes" />
          </SelectField>

          <SelectItemClass
           itemType={this.props.itemType}
           itemClass={this.props.itemClass}
           handleItemClassChange={this.props.handleItemClassChange}
           />

          <TextField
           type="text"
           hintText ="アイテム名前検索"
           value= {this.props.item}
           onChange={e => this.props.handlePlaceChange(e.target.value)}
          />
        </form>
      </MuiThemeProvider>
    </div>
    )
  }
}

export default ItemSearch
