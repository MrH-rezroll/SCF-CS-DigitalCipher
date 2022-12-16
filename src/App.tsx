import * as React from "react";
import Modal from 'react-modal';
import { Routes, Route, Outlet, Link } from "react-router-dom";

interface ModalProps {
  buttonText: string,
  modalMessage: string
  modalType: number,
  modalCustomClassName: string
}

export default function App() {

  return (
    <div id="AppWrapper">
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AppLanding />} />
          <Route path="beginner" element={<Beginner />} />
          <Route path="advanced" element={<Advanced />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function ModalWindow(props:ModalProps){
  //let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
    <button className={props.modalCustomClassName} type="button" onClick={openModal}>{props.buttonText}</button>
    <Modal
      isOpen={modalIsOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={closeModal}
      //style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={closeModal}>close</button>
      <h3>{props.buttonText}</h3>
      <div><p>{props.modalMessage}</p></div>
      {props.modalType != 0 ? <CopyPasteKeyForm buttonText={props.buttonText} modalMessage={props.modalMessage} modalType={props.modalType} modalCustomClassName={props.modalCustomClassName} /> : ''}
    </Modal>
    </>
  );
}

function Layout() {
  return (
    <div id="AppWrapper2">
      <h1 id="AppTitle">Digital Cipher Activity</h1>
      <Outlet />
    </div>
  );
}

function AppLanding() {
  return (
    <div id="AppLanding">
      <h2>Select Mode</h2>
      <div id="MainSelection">
        <Link to="Beginner">Beginner</Link>
        <Link to="Advanced">Advanced</Link>
      </div>
    </div>
  );
}

function Beginner() {
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

function CopyPasteKeyForm(props:ModalProps){
  return (
    <>
    <form>
      <input name="{props.modalType}" type="text"></input>
      <button>{props.modalMessage}</button>
    </form>
    </>
  )
}

function Advanced() {
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
          <ModalWindow buttonText={"About Encoded Sharing"} modalMessage={"For further security, you can encode your shift key with a more complex algorithm called base64. This way you are not sharing the actual shift value. Use copy to create the encoded key for your message, and use paste to set a key from an encoded message."} modalType={0} modalCustomClassName={"help-button"} />
          <div>
            <ModalWindow buttonText={"Copy Encoded Key"} modalMessage={"Copy Encoded Key to Clipboard"} modalType={1} modalCustomClassName={""} />
            <ModalWindow buttonText={"Paste Encoded Key"} modalMessage={"Paste Encoded Key from Clipboard"} modalType={2} modalCustomClassName={""} />
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

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}

function changeShiftValue(event: { target: { value: any; }; }) {
  console.log(event.target.value);
}