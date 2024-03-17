// Data Types in TypeScript --

let greetings = "Hello Avinash";

console.log(greetings);

// here the greetings can take any type of data.

// But Typescript help us to avoid these kind of mistakes by defining the type of the variable before using it --

let name: string = "Avinash";

console.log(name);

{
  /* The output will never change
Hello Avinash
Avinash

but in case of name = We made it very clear that name will not take any other type of data but just a string.

*/
}

// Same thing for all the datatypes in Typescript --

let a: number = 25;
let fname: string = "Avi";
let isTrue: boolean = true;
let user: object = { name: "Avinash", age: 25 };

console.table({ a, fname, isTrue, user });

{
  /* Now if you try to give anyother value rather than the type the variable is declared than you will see some errors from Typescript.

a = "Avinash"; It was a number and we tried string
fname = 25; It was a string and we tried a number

Here you will see error - Type 'string' is not assignable to type 'number'. */
}

{
  /*
    This also help us to avoid some errors in the code. Example -- 
    let a: number = 25;
    here a is a number and it will only have number related methods and properties.
    if we try -- 
    a.toLowerCase() this will never work and give you an error. 

    This is one of the biggest advantage of using Typescript.

*/
}
