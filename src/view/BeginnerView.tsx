/**
 * Digital Cipher Activity - The acivity view with only essential options for using ciphers
 * @version 12.19.22
 * @author MrH-rezroll
 */

import React from "react";
import { Link } from "react-router-dom";
import { Props } from "../App";
import BeginnerControl from "../control/BeginnerControl";

export default function (props:Props, beginnerControl:BeginnerControl) {

  return (
      <div id="Beginner">
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
        <form>
          <legend>Encryption Options:</legend>
          <label htmlFor="shiftby">Shift by:</label>
          <input data-b64value="Nw==" type="number" id="shiftby" name="shiftby" min="1" max="24" onChange={beginnerControl.changeKeyValue} defaultValue={7}></input>
          <label>Result:</label>
          <input type="text" id="EncodeDisplayPreview" name="encodedDisplayPreview" readOnly={false} defaultValue={props.cipherModel.theCipherDisplayPreview}></input>
        </form>
        <form>
          <div>
            <legend>Encryption Text:</legend>
            <textarea id="CipherText" name="textToEncode" defaultValue={props.cipherModel.theMessage}></textarea>
            <div className="message-buttons">
              <button onClick={beginnerControl.copyMessageToClipboard} className="fit-content-width">Copy Message to Clipboard</button>
              <button onClick={beginnerControl.pasteMessageFromClipboard} className="fit-content-width">Paste Message from Clipboard</button>
            </div>
            </div>
          <div>
            <button onClick={beginnerControl.encodeTheCipherText}>Encode Text</button>
            <button onClick={beginnerControl.decodeTheCipherText}>Decode Text</button>
          </div>
        </form>
      </div>
    );
}
