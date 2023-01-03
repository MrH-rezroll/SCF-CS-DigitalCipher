/**
 * Digital Cipher Activity - Handles user input from the corresponding view and any business logic that may be required
 * @version 12.19.22
 * @author MrH-rezroll
 */

import React from "react";
import { Props } from "../App";
import BaseCipherModel from "../model/BaseCipherModel";
import CaesarCipherModel from "../model/CaesarCipherModel";
import BeginnerView from "../view/BeginnerView";

let cipherPreviewInput = document.getElementById('EncodeDisplayPreview') as HTMLInputElement | null;
let cipherText = document.getElementById('CipherText') as HTMLInputElement | null;

export default class BeginnerControl extends React.Component<Props>{
    theCipherModel:BaseCipherModel;
    constructor(props:Props){
        super(props);
        this.theCipherModel = props.cipherModel;
        cipherPreviewInput = null;
        cipherText = null; 
        this.encodeTheCipherText = this.encodeTheCipherText.bind(this);
        this.decodeTheCipherText = this.decodeTheCipherText.bind(this);
        this.changeKeyValue = this.changeKeyValue.bind(this);
    }

    render(): React.ReactNode {
        console.log(this.props.cipherModel)
        return BeginnerView(this.props, this);
    }

    /**
     * Get the current Cipher Model
     * @returns the instance of this Concrete CipherModel
     */
    gettheCipherModel():BaseCipherModel{
        return this.theCipherModel;
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
        if(cipherText == null){
            cipherText = document.getElementById('CipherText') as HTMLInputElement | null;
        }
        if(cipherText != null){
            console.log(this.theCipherModel);
            console.log(cipherText.value);
            this.theCipherModel.setTheEncodedMessage(cipherText.value);
            cipherText.value = this.theCipherModel.getTheMessage();
        }
        
    }

    /**
     * Encodes the message with the Ceasar Cipher type
     * @param event the event that invoked this decode method
     * @returns The message encoded with the Caesar Cipher and Key
     */
    decodeTheCipherText(event: any){
        event.preventDefault();
        if(cipherText == null){
            cipherText = document.getElementById('CipherText') as HTMLInputElement | null;
        }
        if(cipherText != null){
            cipherText.value = this.theCipherModel.getTheDecodedMessage(cipherText.value);
        }
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
    }
    
    /**
     * Updates the CipherModel key and generates a new display preview for the new key
     * @param event the event that invoked this method
     */
    changeKeyValue(event: { target: {name: any, value: any; }; }) {
        if(event.target.name == "shiftby"){
            this.theCipherModel.setTheCipherKey(Number(event.target.value));
            this.theCipherModel.setTheCipherDisplayPreview();
            if(cipherPreviewInput != null){
                cipherPreviewInput.value = this.theCipherModel.getTheCipherDisplayPreview();
            }
            else {
                cipherPreviewInput = document.getElementById('EncodeDisplayPreview') as HTMLInputElement | null;
                if(cipherPreviewInput != null){
                    cipherPreviewInput.value = this.theCipherModel.getTheCipherDisplayPreview();
                }
            }
            let theShiftInput = document.getElementById("shiftby") as HTMLInputElement;
            theShiftInput.setAttribute('data-b64value', this.theCipherModel.getBase64EncodedKey());
        }
    }
}