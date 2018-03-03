import React from 'react'


const MyClosetTopsTable = (props) => {
  return (
    <table className="MyClosetTopsTable">
      <tbody>
          {props.data.map((Tops) => {
            console.log(Tops)
            return(
              <tr className="MyclosetTTr" key={Tops.id}>
                <td><img alt='' src={Tops.image}/></td>
                <td>{Tops.makers}</td>
                <td>{Tops.title}</td>
              </tr>
            )
          })}
      </tbody>
    </table>
  )
}

export default MyClosetTopsTable
