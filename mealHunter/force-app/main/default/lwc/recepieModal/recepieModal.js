import { LightningElement, api } from 'lwc';

export default class RecepieModal extends LightningElement {
    @api selectedMeals;

    handleClick(){
        let evt = new CustomEvent('closemodal');
        this.dispatchEvent(evt);
    }
}