import React from 'react'
import Modal from 'react-modal'
import Detailitem from './Detailitem'

class MyClosetTopsTable extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      modalIsOpen: false,
    }
  }

  handleOpenModal(){
    this.setState({modalIsOpen: true})
  }

   render() {
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
       <div className="MyClosetTable">
         {this.props.data.map((Tops) => {
           return(
             <div className="item_frame" key={Tops.id} onClick={()=>this.handleOpenModal()}>
               <img alt='' src={Tops.image.url} height="100px" width="100px"/>
               <Modal
                 isOpen={modalIsOpen}
                 style={customStyles}
                 onRequestClose="">
                 <Detailitem data={Tops}/>
               </Modal>
             </div>
           )
         })}
       </div>

     )
   }
}

export default MyClosetTopsTable
