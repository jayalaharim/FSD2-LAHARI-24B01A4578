let n=1634;
let temp=n,total=0;
let digits=n.toString().length;
while(temp>0){
    let d=temp%10;
    total+=d**digits;
    temp=Math.floor(temp/10);
}
console.log(total==n? "Armstrong":"Not Armstrong");