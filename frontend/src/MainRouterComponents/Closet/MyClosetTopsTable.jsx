import React from 'react'


const MyClosetTopsTable = (props) => {
  return (
    <table className="MyClosetTopsTable">
      <tbody>
          {props.data.map((Tops) => {
            return(
              <div className="MyclosetTops" key={Tops.id}>
                <td><img alt='' src={Tops.image}/></td>
              </div>
            )
          })}
      </tbody>
    </table>
  )
}

export default MyClosetTopsTable
