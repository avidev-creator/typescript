// Here we get 2 keywords Private And Public.

// When you do not mark your variables with private or public they are public by default.

// For private you just have to mark the variable with private infront of it.

// class User {
//   public email: string;
//   name: string;
//   private readonly city: string = "Jabalpur";
//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

// const avi = new User("avi@gmail.com", "Avi");
// console.log(avi.city);

// Now you will see an error that the city can not be used outside the class as its a private variable.

// Only those which are public can be used outside of the class.

// There is another of writting the same code --

class User {
  readonly city: string = "Jabalpur";
  constructor(public email: string, public name: string) {}
}

const avi = new User("avi@gmail.com", "Avi");
console.log(avi.email);
