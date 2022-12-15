import * as React from "react";
import { Helmet } from 'react-helmet';
import { Routes, Route, Outlet, Link } from "react-router-dom";

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
    <div>
      <h2>Beginner</h2>
      <Link to="/">Back</Link>
      <form>
        <legend>Encryption Type:</legend>
        <select>
          <option value="caesar" selected>Caesar Cipher</option>
        </select>
      </form>
      <form>
        <legend>Encryption Options</legend>
        <label htmlFor="shiftby">Shift by:</label>
        <input type="number" id="shiftby" name="shiftby" min="1" max="24" value="7"></input>
        <label>Result:</label>
        <input type="text" readOnly={true} value="a -> h"></input>
      </form>
      <form>
        <legend>Encryption Text</legend>
        <textarea name="textToEncode"></textarea>
        <button>Encode Text</button>
        <button>Decode Text</button>
      </form>
    </div>
  );
}

function Advanced() {
  return (
    <div>
      <h2>Advanced</h2>
      <Link to="/">Back</Link>
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