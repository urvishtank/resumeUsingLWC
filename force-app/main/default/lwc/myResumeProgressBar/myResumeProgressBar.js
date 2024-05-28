import { LightningElement, api } from 'lwc';

export default class MyResumeProgressBar extends LightningElement {
    @api progressValue 

    // get getStyle(){
    //     return `width:${this.progressValue}%`
    // }
}