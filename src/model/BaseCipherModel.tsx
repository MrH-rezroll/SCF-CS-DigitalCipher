/**
 * Digital Cipher Activity - Models the elements common to all DigitalCyphers
 * @version 12.20.22
 * @author MrH-rezroll
 */

export default abstract class BaseCipherModel{
    theMessage:string;
    theCipherKey:number;
    public theCipherDisplayPreview:string = "";
    messageIsEncoded:boolean;
    constructor(message:string, cipherKey:number){
        this.theMessage = message;
        this.theCipherKey = cipherKey;
        this.messageIsEncoded = false;
    }

    isTheMessageEncoded():boolean{
        return this.messageIsEncoded;
    }
    setTheMessageIsEncoded(isEncoded:boolean){
        this.messageIsEncoded = isEncoded;
    }
    
    setTheCipherDisplayPreview (){
        this.theCipherDisplayPreview = "should override";
    }
    getTheCipherDisplayPreview ():string {
        return this.theCipherDisplayPreview;
    }

    getTheMessage ():string{
        return this.theMessage;
    }
    setTheMessage (message:string){
        this.theMessage = message;
    }

    getTheCipherKey ():number{
        return this.theCipherKey;
    }
    setTheCipherKey (cipherKey:number){
        this.theCipherKey = cipherKey;
    }

    getBase64EncodedKey ():string {
        return Buffer.from(String(this.getTheCipherKey())).toString('base64');
    }

    setBase64EncodedKey (encodedKey:string) {
        this.setTheCipherKey(Number(Buffer.from(encodedKey, 'base64').toString('ascii')));
    }

    setTheEncodedMessage(message:string){
        this.setTheMessage(message);
    }

    setTheDecodedMessage(message:string){
        this.setTheMessage(message);
    }
}