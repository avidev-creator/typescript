{
  /*
    Type Any is a default type that has been assigned to a variable when there is no type defined.
 */
}

let hero;

function getHero() {
  return "spiderman";
}

hero = getHero();

// If you hover over hero at the start its type is any. That means i can change the value of hero to any other datatype when i want. This breaks the consistancy of the code.

// To avoid that we infer it when we created the variable.

let fname: string;

function storeName() {
  return "Avinash";
}

fname = storeName();

// Here if you try to change the variable to any other datatype it will throw an error.

// Untill and unless its necessary you should avoid using any.
