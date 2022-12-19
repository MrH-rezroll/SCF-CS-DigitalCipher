import { Link } from "react-router-dom";

export default function AppLandingView() {
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