// A combination of 2 or 3 or more type of data into a single variable and you can avoid any --

let score: number | string = 33;

// This score is now either number or string. So it can take both datatypes as values.

score = 44;
score = "55";

console.log(score);

// Union is also very useful when you want to use 2 custom datatypes --

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let avinash: User | Admin = { name: "Golu", id: 334 };

avinash = { username: "AD", id: 334 };

// This is how you can use 2 datatypes that you created and use that inside of a variable and make it use both the datatypes whenever the variable want.

// But when you use this Union it will inform Typescript that the current data that is passing along can be a number or a string but due to this typescript will not allow you to use the functions of number and string to that data. This is how you will be able to achieve that --

function getId(id: number | string) {
  if (typeof id === "string") {
    return id.toLowerCase();
  }
}

console.log(getId("AVINASH"));

// Similarly you can use Union in arrays --

const data: string | number[] = [1, 2, 3, "avinash", "anurag"];

// but this is a mistake because TS says it can be a array of number or array of strings not both.

// But there is a way to fix this --

const data2: (string | number)[] = [1, 2, 3, "avinash", "anurag"];

// Now it will not complain.
