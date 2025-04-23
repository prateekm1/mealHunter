import { LightningElement, api } from 'lwc';

export default class MealTileCmp extends LightningElement {
    @api meal;

    recepieHandler(){
        console.log('MealTileCmp: Inside recepieHandler');
        console.log('MealTileCmp: this.meal BEFORE event creation', JSON.stringify(this.meal));

        if (!this.meal) {
            console.error('MealTileCmp: this.meal is NULL or UNDEFINED right before CustomEvent!');
            debugger;
            return; // Prevent further execution
        }

        if (!this.meal.idMeal) {
            console.error('MealTileCmp: this.meal.idMeal is MISSING right before CustomEvent!', this.meal);
            debugger;
            return; // Prevent further execution
        }

        let evt = new CustomEvent('recepie',{
            detail: this.meal.idMeal
        });
        this.dispatchEvent(evt);
        console.log("Meal Tile Cmp > ", this.meal);
        console.log("MealId Tile Cmp > ", this.meal.idMeal);
        debugger;
    }
}