import { LightningElement, api } from 'lwc';

export default class RecepieModal extends LightningElement {
    @api selectedMeal;

    handleClick(){
        let evt = new CustomEvent('closemodal');
        this.dispatchEvent(evt);
    }
}