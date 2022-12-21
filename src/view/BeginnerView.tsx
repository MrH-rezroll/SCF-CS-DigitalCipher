/**
 * Digital Cipher Activity - The acivity view with only essential options for using ciphers
 * @version 12.19.22
 * @author MrH-rezroll
 */

import { Link } from "react-router-dom";
import BeginnerControl from "../control/BeginnerControl";

export default class BeginnerView {
  theBeginnerControl:BeginnerControl;

  constructor(beginnerControl:BeginnerControl){
    this.theBeginnerControl = beginnerControl;
  }

  getTheBeginnerView(){
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
          <input type="number" id="shiftby" name="shiftby" min="1" max="24" defaultValue={this.theBeginnerControl.getTheCipherKey()} onChange={this.theBeginnerControl.changeKeyValue}></input>
          <label>Result:</label>
          <input type="text" id="EncodeDisplayPreview" name="encodedDisplayPreview" readOnly={false} onChange={this.theBeginnerControl.changeKeyValue} defaultValue={this.theBeginnerControl.getTheCipherDisplayPreview()}></input>
        </form>
        <form>
          <div>
            <legend>Encryption Text:</legend>
            <textarea name="textToEncode" defaultValue={this.theBeginnerControl.getTheCipherMessage()}></textarea>
          </div>
          <div>
            <button>Encode Text</button>
            <button>Decode Text</button>
          </div>
        </form>
      </div>
    );
  }
}
