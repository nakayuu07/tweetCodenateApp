import React from 'react'


const MyClosetHatTable = (props) => {
  return (
    <div className="MyClosetHatTable">
      {props.data.map((hat) => {
        return(
            <img alt='' src={hat.image} key={hat.id} height="300px" width="300px" />
        )
      })}
    </div>
  )
}

export default MyClosetHatTable
