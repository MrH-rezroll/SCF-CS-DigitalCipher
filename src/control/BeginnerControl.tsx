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

export default class BeginnerControl{
    theBeginnerView:BeginnerView;
    constructor(){
        this.theBeginnerView = new BeginnerView(this);
        theCipherModel = new CaesarCipherModel("Let's encode some text with a Caesar Cipher!", 7);
    }

    getTheBeginnerViewMarkup(){
        return this.theBeginnerView.getTheBeginnerView();
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
    
    changeKeyValue(event: { target: {name: any, value: any; }; }) {
        if(event.target.name == "shiftby"){
            theCipherModel.setTheCipherKey(Number(event.target.value));
            console.log(theCipherModel.getTheCipherKey());
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
        }
    }
}