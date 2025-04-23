import { LightningElement } from 'lwc';
import meal from "@salesforce/resourceUrl/meal";

export default class MealSearch extends LightningElement {
    searchMeal;
    changeHandler(event){
        this.searchMeal = event.target.value;
    }

    clickHandler(event){
        let myCustomEvent = new CustomEvent('searchmeal', {detail: this.searchMeal});
        this.dispatchEvent(myCustomEvent);
    }
}