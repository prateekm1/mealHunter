import { LightningElement, api } from 'lwc';

export default class LoadMealResults extends LightningElement {
    @api mealResult = [];
    selectedMeals;
    showModal = false;
    get checkMeals(){
        return typeof(this.mealResult) != 'undefined' && this.mealResult.length > 0;
    }

    recepieHandler(event){
        console.log('LoadMealResults: event.detail', event.detail);
        console.log('LoadMealResults: this.mealResult', JSON.stringify(this.mealResult));
        let selectedMealId = event.detail;
        console.log("selected meal ID : ", selectedMealId);
        console.log("meal Results -- ",this.mealResult);
        
      /*this.selectedMeal = undefined;
    for (let i = 0; i < this.mealResult.length; i++) {
    if (this.mealResult[i].idMeal === selectedMealId) {
        this.selectedMeal = this.mealResult[i];
        break;
    } */
        
        this.selectedMeals = JSON.stringify(this.mealResult);

    /* this.selectedMeals = this.mealResult.find(currItem => currItem.idMeal === selectedMealId);
    
       console.log("selected meal : ", selectedMeals);
        this.showModal = true;
        debugger;*/
    } 

    closeHandler(){
        this.showModal = false;
    }
}