import React from 'react'
import Modal from 'react-modal'

import Detailitem from './Detailitem'


class MyClosetShoesTable extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
    }
  }

  handleOpenModal(){
    this.setState({modalIsOpen: true})
  }

  render(){
    const modalIsOpen = this.state.modalIsOpen
    Modal.setAppElement('div')
    const customStyles = {
      content : {
        top                   : '40%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-20%',
        transform             : 'translate(-50%, -50%)'
      }
    }

    return(
      <div  className="MyClosetTable">
        {this.props.data.map((shoes) => {
          return(
            <div className="item_frame" key={shoes.id} onClick={()=>this.handleOpenModal()}>
              <img alt='' src={shoes.image.url} width="100" height="100"/>
              <Modal
                isOpen={modalIsOpen}
                style={customStyles}
                onRequestClose="">
                <Detailitem data={shoes}/>
              </Modal>
            </div>
          )
        })}
      </div>
    )
  }
}

export default MyClosetShoesTable
