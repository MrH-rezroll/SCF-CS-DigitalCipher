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

    public gettheCipherModel():BaseCipherModel{
        return theCipherModel;
    }

    getTheViewMarkup(){
        return this.theBeginnerView.getTheView();
    }

    getTheCipherMessage ():string{
        return theCipherModel.getTheMessage();
    }

    getTheCipherKey ():number{
        return theCipherModel.getTheCipherKey();
    }

    getTheCipherDisplayPreview ():string {
        return theCipherModel.getTheCipherDisplayPreview();
    }

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

    resetMessageIsEncoded(){
        messageIsCurrentlyEncoded = false;
    }

    async copyMessageToClipboard(event: any){
        event.preventDefault();
        let messageBox = document.getElementById("CipherText") as HTMLInputElement;
        await navigator.clipboard.writeText(messageBox.value);
    }

    async pasteMessageFromClipboard(event: any){
        event.preventDefault();
        let messageBox = document.getElementById("CipherText") as HTMLInputElement;
        messageBox.value = await navigator.clipboard.readText();
        messageIsCurrentlyEncoded = true;
    }
    
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