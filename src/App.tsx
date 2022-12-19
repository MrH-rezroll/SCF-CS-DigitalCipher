import { Routes, Route} from "react-router-dom";
import LayoutView from "./view/LayoutView"; 
import BeginnerView from "./view/BeginnerView";
import AdvancedView from "./view/AdvancedView";
import AppLandingView from "./view/AppLandingView";
import NoMatchView from "./view/NoMatchView";

export default function App() {

  return (
    <div id="AppWrapper">
      <Routes>
        <Route path="/" element={<LayoutView />}>
          <Route index element={<AppLandingView />} />
          <Route path="beginner" element={<BeginnerView />} />
          <Route path="advanced" element={<AdvancedView />} />
          <Route path="*" element={<NoMatchView />} />
        </Route>
      </Routes>
    </div>
  );
}
