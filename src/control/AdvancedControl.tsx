/**
 * Digital Cipher Activity - Handles user input from the corresponding view and any business logic that may be required
 * @version 12.19.22
 * @author MrH-rezroll
 */

import AdvancedView from "../view/AdvancedView";

export default class AdvancedControl {
    theAdvancedView:AdvancedView;

    constructor(){
        this.theAdvancedView = new AdvancedView(this);
    }
    

    getTheViewMarkup(){
        return this.theAdvancedView.getTheView();
    }
}