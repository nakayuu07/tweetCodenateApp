import React from 'react'


const MyClosetFrom = (props) => {
  return (
    <table className="MyClosetTable">
      <tbody>
        <tr className="MyclosetTr">
          <td><img alt="Icon" src={props.image} /></td>
          <td>{props.makers}</td>
          <td>{props.title}</td>
        </tr>
      </tbody>
    </table>
  )
}

export default MyClosetFrom
