import React from 'react'


const MyClosetHatTable = (props) => {
  return (
    <table className="MyClosetHatTable">
      <tbody>
      {props.data.map((hat) => {
        return(
          <tr className="MyclosetHatTr" key={hat.id}>
            <td><img alt='' src={hat.image} /></td>
            <td>{hat.makers}</td>
            <td>{hat.title}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

export default MyClosetHatTable
