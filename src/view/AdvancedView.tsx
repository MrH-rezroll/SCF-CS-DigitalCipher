/**
 * Digital Cipher Activity - Advanced View containing more/deeper options for users
 * @version 12.19.22
 * @author MrH-rezroll
 */

import { Link } from "react-router-dom";
import ModalWindowControl from "../control/ModalWindowControl";

export default function AdvancedView() {
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
          <input type="number" id="shiftby" name="shiftby" min="1" max="24" defaultValue={7} onChange={changeShiftValue}></input>
          <label>Result:</label>
          <input type="text" readOnly={true} value="a -> h"></input>
          <legend>Encoded Sharing:</legend>
          <ModalWindowControl buttonText={"About Encoded Sharing"} modalMessage={"For further security, you can encode your shift key with a more complex algorithm called base64. This way you are not sharing the actual shift value. Use copy to create the encoded key for your message, and use paste to set a key from an encoded message."} modalType={0} modalCustomClassName={"help-button"} />
          <div>
            <ModalWindowControl buttonText={"Copy Encoded Key"} modalMessage={"Copy Encoded Key to Clipboard"} modalType={1} modalCustomClassName={""} />
            <ModalWindowControl buttonText={"Paste Encoded Key"} modalMessage={"Paste Encoded Key from Clipboard"} modalType={2} modalCustomClassName={""} />
          </div>
        </form>
        <form>
          <div>
            <legend>Encryption Text:</legend>
            <textarea name="textToEncode"></textarea>
          </div>
          <div>
            <button>Encode Text</button>
            <button>Decode Text</button>
          </div>
        </form>
      </div>
    </div>
  );
}



function changeShiftValue(event: { target: { value: any; }; }) {
    console.log(event.target.value);
  }