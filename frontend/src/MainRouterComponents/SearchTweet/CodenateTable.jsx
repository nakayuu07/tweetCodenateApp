import React from 'react'

class CodenateTable extends React.Component {
  render() {
    const data = this.props.data
    return(
        <img src={data.code_image.url} className="contentDataId" onClick={() => this.props.openModal(data.id)}/>
    )
  }
}

export default CodenateTable
