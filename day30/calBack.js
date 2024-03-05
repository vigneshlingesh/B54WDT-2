// function sum(x, y){
//     return x+y;
// }

// function multiply(x, y){
// return x*y;
// }

// function minious(x, y){
//     return x - y;
// }

// function divison(x, y){
//     return x/y;
// }

// function getResult(x, y, operate){
//     return operate(x , y);
// }

// console.log("Sum Method called:", getResult(2, 3, sum));
// console.log("Multiply Method called:", getResult(2, 3, multiply));
// console.log("Minoius Method called:", getResult(2, 3, minious));
// console.log("Divison Method called:", getResult(2, 3, divison));

let name;

const getName= (cb) =>{
    setTimeout(()=>{
        name = "Vignesh";
        cb();
    },3000);
};

const greet= () => {
    console.log(`Hello ${name}.`);

};

getName(greet);