import React from 'react'


const MyClosetShoesTable = (props) => {
  return (
    <table className="MyClosetShoesTable">
      <tbody>
      {props.data.map((shoes) => {
        return(
          <tr className="MyclosetShoesTr" key={shoes.id}>
            <td><img alt='' src={shoes.image} /></td>
            <td>{shoes.makers}</td>
            <td>{shoes.title}</td>
          </tr>
        )
      })}
      </tbody>
    </table>
  )
}

export default MyClosetShoesTable
