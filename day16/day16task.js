let ten = function(callback){
    setTimeout(() =>{
        console.log("10");
        callback();
    }, 10000);
}
let nine = function(callback){
    setTimeout(() =>{
        console.log("9");
        callback();
    }, 9000);
}
let eight = function(callback){
    setTimeout(() =>{
        console.log("8");
        callback();
    }, 8000);
}
let sevan = function(callback){
    setTimeout(() =>{
        console.log("7");
        callback();
    }, 7000);
}
let six = function(callback){
    setTimeout(() =>{
        console.log("6");
        callback();
    }, 6000);
}
let five = function(callback){
    setTimeout(() =>{
        console.log("5");
        callback();
    }, 5000);
}
let four = function(callback){
    setTimeout(() =>{
        console.log("4");
        callback();
    }, 4000);
}
let three = function(callback){
    setTimeout(() =>{
        console.log("3");
        callback();
    }, 3000);
}
let two = function(callback){
    setTimeout(() =>{
        console.log("2");
        callback();
    }, 2000);
}
let first = function(callback){
    setTimeout(() =>{
        console.log("1");
        callback();
    }, 1000);
}


// CallBack the function

ten(function (){
    nine(function (){
        eight(function (){
            sevan(function (){
                six(function (){
                    five(function (){
                        four(function (){
                            three(function (){
                                two(function (){
                                    first(function (){
                                        console.log("Happy Independence Day");
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});