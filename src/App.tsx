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
import BaseCipherModel from "./model/BaseCipherModel";
import CaesarCipherModel from "./model/CaesarCipherModel";
import React from "react";

export interface Props {
  cipherModel: BaseCipherModel
}

export default function App ({cipherModel}:Props){
  
    return (
      <div id="AppWrapper">
        <Routes>
          <Route path="/" element={<LayoutView />}>
            <Route index element={<AppLandingView />} />
            <Route path="beginner" element={<BeginnerControl cipherModel={cipherModel} />} />
            <Route path="advanced" element={<AdvancedControl cipherModel={cipherModel} />} />
            <Route path="*" element={<AppLandingView />} />
          </Route>
        </Routes>
      </div>
    );
}
