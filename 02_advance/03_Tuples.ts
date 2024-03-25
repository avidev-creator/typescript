let User: [string, number, boolean];

User = ["John", 25, true];

// This is a tuple in TS.

// Remember the order will remain unchanged here.

// You can not give number than boolean than string. You have to always pass the value in the same order as you defined the type at the time of declaration.

User[0] = "Avinash";
User.push(30);
console.log(User);

// Here you just saw that tuples acts as an array and you have the access of all the properties of an array available for a tuple.
