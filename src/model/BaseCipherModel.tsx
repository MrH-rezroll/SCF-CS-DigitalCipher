/**
 * Digital Cipher Activity - Models the elements common to all DigitalCyphers
 * @version 12.20.22
 * @author MrH-rezroll
 */

export default abstract class BaseCipherModel{
    theMessage:string;
    theCipherKey:number;
    alphabet:string[];
    constructor(message:string, cipherKey:number){
        this.theMessage = message;
        this.theCipherKey = cipherKey;
        this.alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
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
}