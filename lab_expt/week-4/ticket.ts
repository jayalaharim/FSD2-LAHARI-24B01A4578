import {gst_rate,ticket_fee} from './constants.js';
import {passenger} from './passenger.js';

export class Ticket{
    constructor(public passenger:passenger,private defaultfare:number,public busno:number){}

    public calcost():number{
        const tax=this.defaultfare*gst_rate;
        return this.defaultfare+tax+ticket_fee;
    }

    public print():void{
        console.log("Ticket Details:");
        console.log('passenger:', this.passenger.name);
        console.log('busnumber: ', this.busno);
        console.log('total cost: ', this.calcost());

    }
    }