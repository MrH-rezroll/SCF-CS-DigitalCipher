/**
 * Digital Cipher Activity - Handles user input from the corresponding view and any business logic that may be required
 * @version 12.19.22
 * @author MrH-rezroll
 */

import AdvancedView from "../view/AdvancedView";
import BeginnerControl from "./BeginnerControl";

export default class AdvancedControl extends BeginnerControl{
    theAdvancedView:AdvancedView;

    constructor(){
        super();
        this.theAdvancedView = new AdvancedView(this);
    }

    /**
     * Get the code markup for the view using this control
     * @returns The display markup used by this control
     */
    getTheViewMarkup(){
        return this.theAdvancedView.getTheViewMarkup();
    }

    
    /**
     * Updates the CipherModel key and generates a new display preview for the new key by calling its super class
     * @param event the event that invoked this method
     */
    changeKeyValue(event: { target: { name: any; value: any; }; }): void {
        super.changeKeyValue(event);
    }
}