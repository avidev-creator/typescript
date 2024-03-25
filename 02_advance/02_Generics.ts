function myName<Type>(num: Type): Type {
  return num;
}

function newName<T>(num: T): T {
  return num;
}

// But what if you need to find the length of the parameter that has been passed?

function lenOf<T>(arg: T): T {
  return arg.length;
}

// You can use the length property on strings or arrays, so how you will pass it?

function arrLen<T>(arg: T[]): T[] {
  console.log(arg.length);
  return arg;
}

// You can also do this --

function arrLen1<T>(arg: T[]): T {
  return arg[1];
}

// But if you try to get the array length than also it will give error cause T will be locked as an array and you are trying to return a number from array.length.

function arrLen2<T>(arg: T[]): T {
  const len = arg.length;
  return arg[len - 1];
}

function newFun<T, U>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

newFun(3, "Avinash");

// You can also extend a generic type from a regular datatype --

function newFun1<T, U extends string>(val1: T, val2: U): object {
  return {
    val1,
    val2,
  };
}

newFun1(4, "Avinash");

// This val2 will always want a string value and nothing else.
