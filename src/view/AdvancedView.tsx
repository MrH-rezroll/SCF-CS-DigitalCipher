/**
 * Digital Cipher Activity - Advanced View containing more/deeper options for users
 * @version 12.19.22
 * @author MrH-rezroll
 */

import React from "react";
import { Link } from "react-router-dom";
import { Props } from "../App";
import AdvancedControl from "../control/AdvancedControl";
import ModalWindowControl from "../control/ModalWindowControl";

export default function (props:Props, advancedControl:AdvancedControl){

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
          <input data-b64value="Nw==" type="number" id="shiftby" name="shiftby" min="1" max="24" defaultValue={7} onChange={advancedControl.changeKeyValue}></input>
          <label>Result:</label>
          <input type="text" id="EncodeDisplayPreview" name="encodedDisplayPreview" readOnly={false} onChange={advancedControl.changeKeyValue} defaultValue={props.cipherModel.theCipherDisplayPreview}></input>
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
            <textarea id="CipherText" name="textToEncode" defaultValue={props.cipherModel.theMessage}></textarea>
            <div className="message-buttons">
              <button onClick={advancedControl.copyMessageToClipboard} className="fit-content-width">Copy Message to Clipboard</button>
              <button onClick={advancedControl.pasteMessageFromClipboard} className="fit-content-width">Paste Message from Clipboard</button>
            </div>
          </div>
          <div>
            <button onClick={advancedControl.encodeTheCipherText}>Encode Text</button>
            <button onClick={advancedControl.decodeTheCipherText}>Decode Text</button>
          </div>
        </form>
      </div>
    </div>
  );
}