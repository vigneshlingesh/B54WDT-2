//function person(){
   // this.name = "gust";

//}
//let person1 = new person();

//let person2 = new person("vignresh");


//console.log(person1, person2);

function student(name, email, phone){
    this.name = name;
    this.email = email;
    this.phone = phone;

    this.getname = function()
     {
        console.log(`hello! $ {this.name}`);  
       
    }
}

let student202 = new student("vignesh", "vikivignesh", 8072694957);

student202.getname()
