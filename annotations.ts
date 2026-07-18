// variable annotation
let cartoon:string="shin chan";
let releaseYear:number=2006;
let isHit:boolean=true;

function favCartoon(cartoon:string,year:number):string{
    return `${cartoon} is my favourite cartoon which is released in ${year}.`;
}


let fruits:string[]=["mango","apple","orange"];

const Result:string=favCartoon(cartoon,releaseYear);
console.log(Result);
console.log(`my fav fruits are ${fruits.join(",")}`);

