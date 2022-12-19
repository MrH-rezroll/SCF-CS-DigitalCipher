import Modal from 'react-modal';
import React from 'react';


interface ModalProps {
    buttonText: string,
    modalMessage: string
    modalType: number,
    modalCustomClassName: string
  }

export default function ModalWindowView(props:ModalProps){
    //let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      //subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setIsOpen(false);
    }
    
    return (
      <>
      <button className={props.modalCustomClassName} type="button" onClick={openModal}>{props.buttonText}</button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        //style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <h3>{props.buttonText}</h3>
        <div><p>{props.modalMessage}</p></div>
        {props.modalType != 0 ? <CopyPasteKeyForm buttonText={props.buttonText} modalMessage={props.modalMessage} modalType={props.modalType} modalCustomClassName={props.modalCustomClassName} /> : ''}
      </Modal>
      </>
    );
  }

function CopyPasteKeyForm(props:ModalProps){
    return (
      <>
      <form>
        <input name="{props.modalType}" type="text"></input>
        <button>{props.modalMessage}</button>
      </form>
      </>
    )
  }