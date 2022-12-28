/**
 * Digital Cipher Activity - Entrypoint to the activity app
 * @version 12.19.22
 * @author MrH-rezroll
 */

import { Routes, Route} from "react-router-dom";
import LayoutView from "./view/LayoutView"; 
import AppLandingView from "./view/AppLandingView";
import NoMatchView from "./view/NoMatchView";
import BeginnerControl from "./control/BeginnerControl";
import AdvancedControl from "./control/AdvancedControl";

export default class App {

  public theBeginnerControl:BeginnerControl = new BeginnerControl();
  public theAdvancedControl:AdvancedControl = new AdvancedControl();
  
  GetAppMarkup (){
    return (
      <div id="AppWrapper">
        <Routes>
          <Route path="/" element={<LayoutView />}>
            <Route index element={<AppLandingView />} />
            <Route path="beginner" element={this.theBeginnerControl.getTheViewMarkup()} />
            <Route path="advanced" element={this.theAdvancedControl.getTheViewMarkup()} />
            <Route path="*" element={<NoMatchView />} />
          </Route>
        </Routes>
      </div>
    );
  }
}
