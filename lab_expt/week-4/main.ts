import { Ticket } from "./ticket.js";
import { passenger } from "./passenger.js";

const traveler:passenger={
    name:"lahari",
    age:20,
    seatpreference:'middle'
};

const myticket=new Ticket(traveler,1500,156367);

myticket.print();