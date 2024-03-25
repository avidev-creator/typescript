interface User {
  name: string;
  id: number;

  greet(): string; // Declarig a function in interface.
}

// Definition of the function--
function greet(): string {
  return "Hello";
}

const avi: User = {
  name: "Avinash",
  id: 2,
  greet() {
    return "Hello " + this.name;
  },
};
console.log(avi.greet());

// This is how you create an Interface. If you take a look at the syntax it looks like a class but its a blueprint of the object.

// In an interface you can declare your functions as well and you have the flexibility to implement them later.

// Reopening an Interface --

// Whenever you want to edit your interface and want to add something in your interface than its called as Reopening of an Interface and all you have to do is redefine the same interface with same name and just add the new thing.

// Here i added a new function and take a close look that Typescript is not complaining about User name is already declared.

interface User {
  sayHello(): string;
}

// You can also extend the interface --

interface ExtendedUser extends User {
  role: "admin" | "user";
}

const newUser: ExtendedUser = {
  name: "John",
  id: 1,
  role: "admin",
  greet() {
    return "Hello " + this.name;
  },
  sayHello() {
    return "Hey " + this.name;
  },
};

console.log(newUser.sayHello());
