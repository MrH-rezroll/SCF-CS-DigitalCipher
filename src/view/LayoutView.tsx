import { Outlet} from "react-router-dom";

export default function LayoutView() {
    return (
      <div id="AppWrapper2">
        <h1 id="AppTitle">Digital Cipher Activity</h1>
        <Outlet />
      </div>
    );
  }