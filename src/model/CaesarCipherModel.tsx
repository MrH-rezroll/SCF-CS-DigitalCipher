/**
 * Digital Cipher Activity - Models a Caesar Digital Cypher
 * @version 12.20.22
 * @author MrH-rezroll
 */

import BaseCipherModel from "./BaseCipherModel";

export default class CaesarCipherModel extends BaseCipherModel{
    constructor(message:string, cipherKey:number){
        super(message, cipherKey);
        this.setTheCipherDisplayPreview();
    }

    getTheEncodedMessage ():string {
        return this.encodeTheMessage();
    }
    
    setTheDecodedMessage (message:string) {
        this.setTheMessage(this.decodeTheMessage(message));
    }

    setTheCipherDisplayPreview () {
        let displayPreview:string = "a -> ";
        displayPreview += this.encodeTheMessage("a");
        this.theCipherDisplayPreview = displayPreview;
    }

    private decodeTheMessage(textToDecode: string):string{
        let theDecodedMessage:string = '';
        for (let i:number = 0; i < textToDecode.length; i++) {
            let alphabetWrappedKey: number = this.getTheCipherKey();
            let characterToAdd:string = String(textToDecode.charAt(i));
            for(let j:number = 0; j < this.alphabet.length; j++){
                if(this.alphabet[j].toLocaleLowerCase() == String(textToDecode.charAt(i)).toLocaleLowerCase()){
                    alphabetWrappedKey = j - this.getTheCipherKey();
                    if(alphabetWrappedKey < 0){
                        alphabetWrappedKey = this.alphabet.length - Math.abs(alphabetWrappedKey);
                    }
                    if(textToDecode.charAt(i) == textToDecode.charAt(i).toUpperCase()){
                        characterToAdd = this.alphabet[alphabetWrappedKey].toUpperCase();
                    }
                    else{
                        characterToAdd = this.alphabet[alphabetWrappedKey].toLowerCase();
                    }
                    break;
                }
            }
            theDecodedMessage += characterToAdd;
        }
        return theDecodedMessage;
    }

    private encodeTheMessage (textToEncode: string = this.getTheMessage()):string{
        let theEncodedMessage:string = '';
        for (let i:number = 0; i < textToEncode.length; i++) {
            let alphabetWrappedKey: number = this.getTheCipherKey();
            let characterToAdd:string = String(textToEncode.charAt(i));
            for(let j:number = 0; j < this.alphabet.length; j++){
                if(this.alphabet[j].toLocaleLowerCase() == String(textToEncode.charAt(i)).toLocaleLowerCase()){
                    alphabetWrappedKey += j;
                    if(alphabetWrappedKey > this.alphabet.length){
                        alphabetWrappedKey = this.getTheCipherKey() - (this.alphabet.length - j);
                    }
                    if(textToEncode.charAt(i) == textToEncode.charAt(i).toUpperCase()){
                        characterToAdd = this.alphabet[alphabetWrappedKey].toUpperCase();
                    }
                    else{
                        characterToAdd = this.alphabet[alphabetWrappedKey].toLowerCase();
                    }
                    break;
                }
            }
            theEncodedMessage += characterToAdd;
        }

        return theEncodedMessage;
    }
}