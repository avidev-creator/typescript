const User = {
  name: "avinash",
  email: "avi@gmail.com",
  isActive: true,
};

// This is similar to JS but the use case of object is through a function.

// Below is how to make a function return an object without using parameters --

function getUser(): object {
  return {
    name: "avinash",
    email: "avi@gmail.com",
    isActive: true,
  };
}

console.log(getUser());

// Below is how to make a function return an object while using parameters as well --

function newUser(name: string, email: string, isActive: boolean): object {
  return {
    name: name,
    email: email,
    isActive: isActive,
  };
}

console.log(newUser("avinash", "avi@gmail.com", true));

// Passing an object as a parameter --

function createUser({
  name,
  isPaid,
}: {
  name: string;
  isPaid: boolean;
}): object {
  return {
    name: name,
    email: "avi@gmail.com",
    isActive: true,
    isPaid: isPaid,
  };
}

let newUser1 = { name: "Avi", email: "a@gmail.com", isActive: true };

createUser({
  name: newUser1.name,
  isPaid: false,
});

// TODO - work on the above definition and fix it.

// This is how you can create an alias of an object --

// If you use type and than define something that will become a datatype and other variables can use that datatype.

// type Avi = "Hello" -- This is a string

type User = {
  name: string;
  email: string;
  isActive: boolean;
};

function specialUser(user: User) {
  return user;
}

specialUser({ name: "Avinash", email: "a@gmail.com", isActive: true });

// How to make something as readonly and something as optional --

type newUser = {
  readonly _id: string; // This will make _id as readonly
  name: string;
  email: string;
  isActive: boolean;
  cardDetails?: number; // This is now optional and even if you dont pass the system will not complain
};

let myNewUser: newUser = {
  _id: "123",
  name: "Avinash",
  email: "a@gmail.com",
  isActive: true,
};

myNewUser.email = "b@gmail.com";

console.log(myNewUser);
