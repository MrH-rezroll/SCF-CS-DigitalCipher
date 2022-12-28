/**
 * Digital Cipher Activity - provide the UI for the pop-up window offering users more options. Typically only found in the Acvanced activity
 * @version 12.19.22
 * @author MrH-rezroll
 */

import Modal from 'react-modal';
import React from 'react';
import { ModalProps } from '../control/ModalWindowControl';

export default function ModalWindowView(props:ModalProps){
    //let subtitle;
    const [modalIsOpen, setIsOpen] = React.useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      //subtitle.style.color = '#f00';
      let theShiftInput = document.getElementById("shiftby") as HTMLInputElement;
      if(document.getElementById("GetB64KeyInput") != undefined){
        let theB64Key = document.getElementById("GetB64KeyInput") as HTMLInputElement;
        theB64Key.value = String(theShiftInput.getAttribute('data-b64value'));
      }
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    return (
      <>
      <button className={props.modalCustomClassName} type="button" onClick={openModal}>{props.buttonText}</button>
      <Modal
        appElement={document.body}
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        //style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal}>close</button>
        <h3>{props.buttonText}</h3>
        <div><p>{props.modalMessage}</p></div>
        {props.modalType != 0 ? <CopyPasteKeyForm buttonText={props.buttonText} modalMessage={props.modalMessage} modalType={props.modalType} modalCustomClassName={props.modalCustomClassName}/> : ''}
      </Modal>
      </>
    );
  }

  function setKeyFromB64Key(event:React.MouseEvent) {
    event.preventDefault();
    if(document.getElementById("SetB64KeyInput") != undefined){
      let b64Key = document.getElementById("SetB64KeyInput") as HTMLInputElement;
      globalThis.theApp.theBeginnerControl.gettheCipherModel().setBase64EncodedKey(b64Key.value);
      let theShiftInput = document.getElementById("shiftby") as HTMLInputElement;
      theShiftInput.value = String(globalThis.theApp.theBeginnerControl.gettheCipherModel().getTheCipherKey());
    }
  }

function CopyPasteKeyForm(props:ModalProps){
  
    return (
      <>
      <form>
        <input id={props.modalCustomClassName} name={String(props.modalType)} type="text"></input>
        <button onClick={setKeyFromB64Key}>{props.modalMessage}</button>
      </form>
      </>
    )
  }