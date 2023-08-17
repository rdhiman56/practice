
let user = {
    name : "Rahul",
    age: 23
};

//=========== Refrence of object ===============================//

// Objects are stored and copied by refrence in Javascript
// user having address of memory where user object is getting store

let person = user; // assign refrence of original object to Person variable
person.name = "Dhiman"; // we are changing the original object 
console.log("Output => user", user); // Output =>user  {name: 'Dhiman', age: 23}
console.log("Output => Person", person); // Output =>Person  {name: 'Dhiman', age: 23}


//=========== Duplicate the Object===============================//

let person = {}; //blank object
Object.assign(person, user);
person.name = "Dhiman";
console.log("Output => User", user); // Output => User {name: 'Rahul', age: 23}
console.log("Output => Person", person);  // Output => Person {name: 'Dhiman', age: 23}
