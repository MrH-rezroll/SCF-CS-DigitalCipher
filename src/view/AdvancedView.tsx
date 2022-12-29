/**
 * Digital Cipher Activity - Advanced View containing more/deeper options for users
 * @version 12.19.22
 * @author MrH-rezroll
 */

import { Link } from "react-router-dom";
import AdvancedControl from "../control/AdvancedControl";
import ModalWindowControl from "../control/ModalWindowControl";

export default class AdvancedView {
  theAdvancedControl:AdvancedControl;

  constructor(advancedControl:AdvancedControl){
    this.theAdvancedControl = advancedControl;
  }

  getTheView(){
  return (
    <div id="Advanced">
      <div id="EncryptionSelection">
        <h2>Beginner</h2>
        <Link to="/">Back</Link>
        <form>
          <legend>Encryption Type:</legend>
          <select defaultValue={"caesar"}>
            <option value="caesar">Caesar Cipher</option>
          </select>
        </form>
      </div>
      <div id="EncryptionOperations">
        <form>
          <legend>Encryption Options:</legend>
          <label htmlFor="shiftby">Shift by:</label>
          <input data-b64value="Nw==" type="number" id="shiftby" name="shiftby" min="1" max="24" defaultValue={7} onChange={this.theAdvancedControl.changeKeyValue}></input>
          <label>Result:</label>
          <input type="text" id="EncodeDisplayPreview" name="encodedDisplayPreview" readOnly={false} onChange={this.theAdvancedControl.changeKeyValue} defaultValue={this.theAdvancedControl.getTheCipherDisplayPreview()}></input>
          <legend>Encoded Sharing:</legend>
          <ModalWindowControl buttonText={"About Encoded Sharing"} modalMessage={"For further security, you can encode your shift key with a more complex algorithm called base64. This way you are not sharing the actual shift value. Use copy to create the encoded key for your message, and use paste to set a key from an encoded message."} modalType={0} modalCustomClassName={"help-button"}/>
          <div>
            <ModalWindowControl buttonText={"Copy Encoded Key"} modalMessage={"Copy Encoded Key to Clipboard"} modalType={1} modalCustomClassName={"GetB64KeyInput"}/>
            <ModalWindowControl buttonText={"Paste Encoded Key"} modalMessage={"Paste Encoded Key from Clipboard"} modalType={2} modalCustomClassName={"SetB64KeyInput"}/>
          </div>
        </form>
        <form>
          <div>
            <legend>Encryption Text:</legend>
            <textarea onChange={this.theAdvancedControl.resetMessageIsEncoded} id="CipherText" name="textToEncode" defaultValue={this.theAdvancedControl.getTheCipherMessage()}></textarea>
            <div className="message-buttons">
              <button onClick={this.theAdvancedControl.copyMessageToClipboard} className="fit-content-width">Copy Message to Clipboard</button>
              <button onClick={this.theAdvancedControl.pasteMessageFromClipboard} className="fit-content-width">Paste Message from Clipboard</button>
            </div>
          </div>
          <div>
            <button onClick={this.theAdvancedControl.encodeTheCipherText}>Encode Text</button>
            <button onClick={this.theAdvancedControl.decodeTheCipherText}>Decode Text</button>
          </div>
        </form>
      </div>
    </div>
  );
  }
}