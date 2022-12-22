/**
 * Digital Cipher Activity - Models a Caesar Digital Cypher
 * @version 12.20.22
 * @author MrH-rezroll
 */

import BaseCipherModel from "./BaseCipherModel";

const alphabet:String[] = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let theTextToCode:string;

export default class CaesarCipherModel extends BaseCipherModel{
    constructor(message:string, cipherKey:number){
        super(message, cipherKey);
        this.setTheCipherDisplayPreview();
    }

    async setTheEncodedMessage(message:string){
        await this.setTheMessage(this.encodeTheMessage(message));
    }

    getTheEncodedMessage ():string {
        return this.encodeTheMessage();
    }
    
    async setTheDecodedMessage (message:string) {
        await this.setTheMessage(this.decodeTheMessage(message));
    }

    setTheCipherDisplayPreview () {
        let displayPreview:string = "a -> ";
        displayPreview += this.encodeTheMessage("a");
        this.theCipherDisplayPreview = displayPreview;
    }

    private decodeTheMessage(textToDecode: string):string{
        theTextToCode = textToDecode;
        let theDecodedMessage:string = '';
        for (let i:number = 0; i < theTextToCode.length; i++) {
            let alphabetWrappedKey: number = this.getTheCipherKey();
            let characterToAdd:string = String(theTextToCode.charAt(i));
            for(let j:number = 0; j < alphabet.length; j++){
                if(alphabet[j].toLocaleLowerCase() == String(theTextToCode.charAt(i)).toLocaleLowerCase()){
                    alphabetWrappedKey = j - this.getTheCipherKey();
                    if(alphabetWrappedKey < 0){
                        alphabetWrappedKey = alphabet.length - Math.abs(alphabetWrappedKey);
                    }
                    if(theTextToCode.charAt(i) == theTextToCode.charAt(i).toUpperCase()){
                        characterToAdd = alphabet[alphabetWrappedKey].toUpperCase();
                    }
                    else{
                        characterToAdd = alphabet[alphabetWrappedKey].toLowerCase();
                    }
                    break;
                }
            }
            theDecodedMessage += characterToAdd;
        }
        return theDecodedMessage;
    }

    private encodeTheMessage (textToEncode: string = this.getTheMessage()):string{
        theTextToCode = textToEncode;
        let theEncodedMessage:string = '';
        for (let i:number = 0; i < theTextToCode.length; i++) {
            let alphabetWrappedKey: number = this.getTheCipherKey();
            let characterToAdd:string = String(theTextToCode.charAt(i));
            for(let j:number = 0; j < alphabet.length; j++){
                if(alphabet[j].toLocaleLowerCase() == String(theTextToCode.charAt(i)).toLocaleLowerCase()){
                    alphabetWrappedKey += j;
                    if(alphabetWrappedKey > alphabet.length-1){
                        alphabetWrappedKey = this.getTheCipherKey() - (alphabet.length - j);
                    }
                    if(theTextToCode.charAt(i) == theTextToCode.charAt(i).toUpperCase()){
                        characterToAdd = alphabet[alphabetWrappedKey].toUpperCase();
                    }
                    else{
                        if(alphabet[alphabetWrappedKey] != undefined){
                            characterToAdd = alphabet[alphabetWrappedKey].toLocaleLowerCase();
                        }
                        else{
                            characterToAdd = String(alphabet[alphabetWrappedKey]);
                        }
                    }
                    break;
                }
            }
            theEncodedMessage += characterToAdd;
        }

        return theEncodedMessage;
    }
}