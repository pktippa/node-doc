1. Function as class with instance methods

   // defining function as class with accepting member variables
   function Person(initAge){
     this.age = initAge;
     this.amIOld = function() {
       if(this.age > 13){
        console.log("Yes");   
       }else{
         console.log("No");
       }
    }
   }
   
   // Creating new instance of class/function 
   var person = new Person(10);
   // Calling instance methods
   person.amIOld();