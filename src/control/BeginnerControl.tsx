import BeginnerView from "../view/BeginnerView";

interface ModalProps {
    buttonText: string,
    modalMessage: string
    modalType: number,
    modalCustomClassName: string
  }

export default function BeginnerControl(){
    return <BeginnerView />;
}