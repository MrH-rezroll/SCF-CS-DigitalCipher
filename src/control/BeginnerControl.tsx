/**
 * Digital Cipher Activity - Handles user input from the corresponding view and any business logic that may be required
 * @version 12.19.22
 * @author MrH-rezroll
 */

import BaseCipherModel from "../model/BaseCipherModel";
import CaesarCipherModel from "../model/CaesarCipherModel";
import BeginnerView from "../view/BeginnerView";

let theCipherModel:BaseCipherModel;
let cipherPreviewInput = document.getElementById('EncodeDisplayPreview') as HTMLInputElement | null;
let cipherText = document.getElementById('CipherText') as HTMLInputElement | null;
let messageIsCurrentlyEncoded: Boolean = true;
export default class BeginnerControl{
    theBeginnerView:BeginnerView;
    constructor(){
        this.theBeginnerView = new BeginnerView(this);
        theCipherModel = new CaesarCipherModel("Sla'z lujvkl zvtl alea dpao h Jhlzhy Jpwoly!", 7);
    }

    /**
     * Get the current Cipher Model
     * @returns the instance of this Concrete CipherModel
     */
    gettheCipherModel():BaseCipherModel{
        return theCipherModel;
    }

    /**
     * Get the code markup for the view using this control
     * @returns The display markup used by this control
     */
    getTheViewMarkup(){
        return this.theBeginnerView.getTheView();
    }

    /**
     * Get the current encoded message
     * @returns the message currently held in the Cipher Mocel
     */
    getTheCipherMessage ():string{
        return this.getTheCipherMessage();
    }

    /**
     * Get the current cipher key
     * @returns The key to be used by the current Cipher Model instance
     */
    getTheCipherKey ():number{
        return this.getTheCipherKey();
    }

    /**
     * A preview of how the current cipher is manipulating the message
     * @returns the preview text displaying how the current key & Cipher are encoding the message
     */
    getTheCipherDisplayPreview ():string {
        return this.getTheCipherDisplayPreview();
    }

    /**
     * Encodes the message with this Cipher type
     * @param event the event that invoked this encode method
     * @returns The message encoded with this Cipher and Key
     */
    encodeTheCipherText(event: any){
        event.preventDefault();
        if(messageIsCurrentlyEncoded){
            return;
        }
        if(cipherText == null){
            cipherText = document.getElementById('CipherText') as HTMLInputElement | null;
        }
        if(cipherText != null){
            console.log(cipherText.value);
            theCipherModel.setTheEncodedMessage(cipherText.value);
            cipherText.value = theCipherModel.getTheMessage();
            messageIsCurrentlyEncoded = true;
        }
        
    }

    /**
     * Encodes the message with the Ceasar Cipher type
     * @param event the event that invoked this decode method
     * @returns The message encoded with the Caesar Cipher and Key
     */
    decodeTheCipherText(event: any){
        event.preventDefault();
        if(!messageIsCurrentlyEncoded){
            return;
        }
        if(cipherText == null){
            cipherText = document.getElementById('CipherText') as HTMLInputElement | null;
        }
        if(cipherText != null){
            cipherText.value = theCipherModel.getTheDecodedMessage(cipherText.value);
            messageIsCurrentlyEncoded = false;
        }
        
    }

    /**
     * Used to help track if the message in the view is currently encoded
     */
    resetMessageIsEncoded(){
        messageIsCurrentlyEncoded = false;
    }

    /**
     * Copies the message as it is displayed in the view to the OS clipboard
     * @param event the event that invoked this method
     */
    async copyMessageToClipboard(event: any){
        event.preventDefault();
        let messageBox = document.getElementById("CipherText") as HTMLInputElement;
        await navigator.clipboard.writeText(messageBox.value);
    }

    /**
     * Pastes a message held on the OS clipboard to the view's textarea.
     * @param event the event that invoked this method
     */
    async pasteMessageFromClipboard(event: any){
        event.preventDefault();
        let messageBox = document.getElementById("CipherText") as HTMLInputElement;
        messageBox.value = await navigator.clipboard.readText();
        messageIsCurrentlyEncoded = true;
    }
    
    /**
     * Updates the CipherModel key and generates a new display preview for the new key
     * @param event the event that invoked this method
     */
    changeKeyValue(event: { target: {name: any, value: any; }; }) {
        if(event.target.name == "shiftby"){
            theCipherModel.setTheCipherKey(Number(event.target.value));
            theCipherModel.setTheCipherDisplayPreview();
            if(cipherPreviewInput != null){
                cipherPreviewInput.value = theCipherModel.getTheCipherDisplayPreview();
            }
            else {
                cipherPreviewInput = document.getElementById('EncodeDisplayPreview') as HTMLInputElement | null;
                if(cipherPreviewInput != null){
                    cipherPreviewInput.value = theCipherModel.getTheCipherDisplayPreview();
                }
            }
            let theShiftInput = document.getElementById("shiftby") as HTMLInputElement;
            theShiftInput.setAttribute('data-b64value', theCipherModel.getBase64EncodedKey());
        }
    }
}