//any datatype
let value:any="Good Day";
value=10;
value=10>5;
console.log(value);

let result:any=98;
result="welcome";
result="hello everyone";
console.log(result);

//unknown datatype
let element:unknown="great day!";
if(typeof element=="string"){
    console.log(element);
}

let variable:unknown=25;
if(typeof variable=="string"){
    console.log(variable);
}

//void type
function greet(message:string):void{
    console.log("hello "+message);
}

greet("rani");


function Printnumber(n:number):void{
console.log(n);
}

Printnumber(25);
