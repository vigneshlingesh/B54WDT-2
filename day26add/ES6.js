// var flag = true;

// function variableScope(){
//     if(flag){

//         var varvaribale ="i am var";
//         let letvariable = 'i am let'
//         const constvariable = 'i am Const'

//         // console.log(varvaribale);
//         // console.log(letvariable);
//         // console.log(constvariable);

//     }
        // console.log(varvaribale);
        // console.log(letvaribale);
        // console.log(constvariable);

// }

// variableScope();

// for(var i =0; i<10; i++){
//    setTimeout(() => console.log(i) , 10000);
// }

class Person{

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Hi my name is: ${this.name} & my age is:${this.age}`;
    }
}
    let person1 = new Person('vicky', 24);
    console.log(person1);

