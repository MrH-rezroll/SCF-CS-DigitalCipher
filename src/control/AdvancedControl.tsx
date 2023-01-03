/**
 * Digital Cipher Activity - Handles user input from the corresponding view and any business logic that may be required
 * @version 12.19.22
 * @author MrH-rezroll
 */

import { Props } from "../App";
import AdvancedView from "../view/AdvancedView";
import BeginnerControl from "./BeginnerControl";

export default class AdvancedControl extends BeginnerControl{

    constructor(props:Props){
        super(props);
    }

    render(): React.ReactNode {
        return AdvancedView(this.props, this);
    }
    
    /**
     * Updates the CipherModel key and generates a new display preview for the new key by calling its super class
     * @param event the event that invoked this method
     */
    changeKeyValue(event: { target: { name: any; value: any; }; }): void {
        super.changeKeyValue(event);
    }
}