import React from 'react'

class ItemSearch extends React.Component {
  render () {
    return (
    <div className="search-page">
       <form className="search-form" onSubmit={e => this.props.handleSubmit(e)}>
         <input type="text"
           value= {this.props.data}
           onChange={e => this.props.handlePlaceChange(e.target.value)}
         />
         <input type="submit-button" type="submit" value="検索"/>
       </form>
    </div>
    )
  }
}

export default ItemSearch
