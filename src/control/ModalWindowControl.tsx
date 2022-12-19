/**
 * Digital Cipher Activity - Handles user input from the corresponding view and any business logic that may be required
 * @version 12.19.22
 * @author MrH-rezroll
 */

import ModalWindowView from "../view/ModalWindowView"

export interface ModalProps {
    buttonText: string,
    modalMessage: string
    modalType: number,
    modalCustomClassName: string
  }

export default function ModalWindowControl(props: ModalProps){
    return <ModalWindowView buttonText={props.buttonText} modalMessage={props.modalMessage} modalType={props.modalType} modalCustomClassName={props.modalCustomClassName}/>;
}