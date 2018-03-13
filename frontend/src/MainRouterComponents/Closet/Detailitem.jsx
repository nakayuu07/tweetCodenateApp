import React from 'react'

const Detailitem = (props) => {

  return(
    <div>
      <div className="item-image">
        <img src={props.data.image} alt=""/>
      </div>

      <div className="detail-item-info">
        <h3>{props.data.maker}</h3>
        <h2>{props.data.title}</h2>
      </div>
    </div>
  )
}

export default Detailitem
