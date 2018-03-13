import React from 'react'
import $ from 'jquery'

const SearchResultForm = (props) => {
  this.RegistrationItem = () => {
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3001//want_closets',
      data: {params: { image: props.image, maker: props.maker,
                       title: props.title,itemtype: props.itemtype,
                       itemClass: props.itemClass}},
      headers: JSON.parse(sessionStorage.getItem('user'))
    })
    .done((results) =>{
    })
  }
  const image_url = `${props.image}`

  return (
    <tr>
      <td><img src={image_url} alt="a" width="10" height="10"/></td>
      <td>{props.maker}</td>
      <td>{props.title}</td>
      <button onClick={this.RegistrationItem}>myクローゼットに追加</button>
    </tr>
  )
}

export default SearchResultForm
