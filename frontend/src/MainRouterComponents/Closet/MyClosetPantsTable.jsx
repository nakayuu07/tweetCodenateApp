import React from 'react'


const MyClosetPantsTable = (props) => {
  return (
    <table className="MyClosetPantsTable">
      <tbody>
      {props.data.map((pants) => {
        return(
          <tr className="MyclosetPantsTr" key={pants.id}>
            <td><img alt='' src={pants.image} /></td>
            <td>{pants.makers}</td>
            <td>{pants.title}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

export default MyClosetPantsTable
