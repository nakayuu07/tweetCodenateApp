import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import SelectItemClass from './SelectItemClass'
import $ from 'jquery'


class RegistratItemForm extends React.Component{
  constructor() {
    super()
    this.state = {
      marker: '',
      title: '',
      itemType: '',
      itemClass: '',
      file: null
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image',this.state.file)
    formData.append('marker', this.state.marker)
    formData.append('title', this.state.title)
    formData.append('itemType', this.state.itemType)
    formData.append('itemClass', this.state.itemClass)
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001//wear_items',
      data: formData,
      processData: false,
      contentType: false,
      headers: JSON.parse(sessionStorage.getItem('user')),
    })
    .done((results) =>{

    })
  }



  handleMarkerChange(marker) {
    this.setState({marker})
  }

  handleTitleChange(title) {
    this.setState({title})
  }

  onChangeFile(e) {
    e.preventDefault()
    this.setState({file: e.target.files[0]})
  }

  handleItemTypeChange = (event, index, value) => {
    this.setState({itemType: value})
  }

  handleItemClassChange = (event, index, value) => {
    this.setState({itemClass: value})
  }


  render() {
    return(
      <div>
        <MuiThemeProvider>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <TextField
             type="text"
             hintText ="メーカー名"
             value= {this.state.marker}
             onChange={e => this.handleMarkerChange(e.target.value)}
            />
            <br/>
            <TextField
             type="text"
             hintText ="アイテムタイトル"
             value= {this.state.title}
             onChange={e => this.handleTitleChange(e.target.value)}
            />
            <br/>

            <SelectField
              floatingLabelText="服のタイプを入力してください"
              value={this.state.itemType}
              onChange={this.handleItemTypeChange }
            >
              <MenuItem value={"hat"} primaryText="hat" />
              <MenuItem value={"tops"} primaryText="tops" />
              <MenuItem value={"pants"} primaryText="pants" />
              <MenuItem value={"shoes"} primaryText="shoes" />
            </SelectField>

            <br/>

            <SelectItemClass
             itemType={this.state.itemType}
             itemClass={this.state.itemClass}
             handleItemClassChange={this.handleItemClassChange}
             />

             <input type="file" onChange={(e) => this.onChangeFile(e)}/>
             <br/>
             <input type="submit"/>
          </form>
        </MuiThemeProvider>

        <br/>

        <button onClick={this.props.CloseRegistratResult}>閉じる</button>
      </div>
    )
  }
}

export default RegistratItemForm
