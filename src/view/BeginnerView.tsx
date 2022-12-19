import { Link } from "react-router-dom";

export default function BeginnerView() {
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
          <input type="number" id="shiftby" name="shiftby" min="1" max="24" defaultValue={7} onChange={changeShiftValue}></input>
          <label>Result:</label>
          <input type="text" readOnly={true} value="a -> h"></input>
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
    );
  }

function changeShiftValue(event: { target: { value: any; }; }) {
    console.log(event.target.value);
  }