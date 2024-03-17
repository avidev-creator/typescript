// This is how you provide the type of parameter inside a function.

function greet(name: string) {
  return "Hello" + " " + name;
}

console.log(greet("Avinash"));

// This is how you get multiple parameters in a function.

function signUp(name: string, email: string, password: string) {
  return "User created";
}

let userSignUp = signUp("Avinash", "avi@xyz.com", "1234@abc");

console.log(userSignUp);

// This is how you can pass default value in parameters when something is not provided when calling the function.

function loginUser(user: string, email: string, isLoggedIn: boolean = false) {
  return (
    "User logged in and the details are " +
    user +
    " " +
    email +
    " " +
    isLoggedIn
  );
}

let newLogin = loginUser("Avinash", "avi@xyz.com");

console.log(newLogin);

// Now you can also declare the type of function which means what the functon will return --

function myVale(user: string): string {
  return "Hello" + " " + user;
}

let newValue = myVale("Avi");

console.log(newValue);

// This how you define the function type when using an arrow function.

const getHello = (user: string): string => {
  return "Hello" + " " + user; // Here if you do not return anyvalue the function will give an error. So always return a string here, even empty string will work untill you are not sure what you have to do in this function.
};

console.log(getHello("Avi"));

// When your function dont want to return anything than you have to use the VOID.

function myVoid(user: string): void {
  console.log("Hello" + " " + user); // Here if you try to use return keyword and try to return anything , typescript will give error.
}

myVoid("Avi");
