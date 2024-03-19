// This is how you can define an array of number --

const arr: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// This is how you can define an array of string --

const newArr: string[] = ["a", "b", "c"];

// You can also define like this --

const heroes: Array<string> = ["Spiderman", "Superman", "Batman"];

type User = {
  name: string;
  isActive: boolean;
};

const allUsers: User[] = []; // This is how you can define an array of objects

allUsers.push({ name: "John", isActive: true });

console.log(allUsers);

//Array of arrays --

const MLmodels: number[][] = [[1, 2, 3]];

MLmodels.push([4, 5, 6]);

console.log(MLmodels);
