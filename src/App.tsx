/**
 * Digital Cipher Activity - Entrypoint to the activity app
 * @version 12.19.22
 * @author MrH-rezroll
 */

import { Routes, Route} from "react-router-dom";
import LayoutView from "./view/LayoutView"; 
import AdvancedView from "./view/AdvancedView";
import AppLandingView from "./view/AppLandingView";
import NoMatchView from "./view/NoMatchView";
import BeginnerControl from "./control/BeginnerControl";

export default function App() {
  const theBeginnerControl = new BeginnerControl();

  return (
    <div id="AppWrapper">
      <Routes>
        <Route path="/" element={<LayoutView />}>
          <Route index element={<AppLandingView />} />
          <Route path="beginner" element={theBeginnerControl.getTheBeginnerViewMarkup()} />
          <Route path="advanced" element={<AdvancedView />} />
          <Route path="*" element={<NoMatchView />} />
        </Route>
      </Routes>
    </div>
  );
}
