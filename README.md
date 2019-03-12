# OO Javascript

Objects in Javascript are very similiar to Ruby in their use. They consist of attributes and functions (prototype functions). There are 3 different types of Javascript objects, objects that look like ruby hashes `{}`, function syntax classes, and es6 class syntax.

### Bracket Objects
Brack style objects are most used for temporary objects that need no constructor, kind of like hashes in ruby with the exception that keys can also point to functions.

Example:
```
  let user = {
    username: "Bob",
    age: 24,
    hobby: "Likes to play video games",
    description: function() {
      console.log(`${this.username} is ${this.age} years old and ${this.hobby.toLowerCase()}`)
    }
  }
```

### Prototype Functions

Prototype functions in JavaScript are the equivilant of ruby instance methods where this particular function is called on the instance of that object. We use this `this` keyword in order to access the instance inside of a prototype function like we do with `self`. 

Example:
```
  let car = {
    startEngine: function() {
      name: "Ferrari",
      console.log(`${this.name} goes vroooom!`);
    }
  }

  car.startEngine();
```

### Function Syntax

In native javascript, in order to create a class for constructing an object, we use the function syntax. The function syntax is just a function that has a constant as a name just like in Ruby, however instead of using the `class` keyword, we use `function` instead.

Example:
```
  function User(username, age, hobby) {
    this.username = username;
    this.age = age;
    this.hobby = hobby;
  }
```

To instantiate this object we would call the function with the `new` keyword in front.
```
  let user = new User("bob", 24, "Likes to play video games");
```

To give this instance a prototype function we would declare this outside of the class definition
```
  function User(username, age, hobby) {
    this.username = username;
    this.age = age;
    this.hobby = hobby;
  }

  // defining a user prototype function called description
  User.prototype.description = function() {
    console.log(`${this.username} is ${this.age} years old and ${this.hobby.toLowerCase()}`)
  }

  let user = new User("bob", 24, "Likes to play video games");
  // calling the user description prototype function
  user.description();
```

What if we wanted a class level variables and functions? We would add each variable or function directly to the class itself
```
  function User(username, age, hobby) {
    this.username = username;
    this.age = age;
    this.hobby = hobby;
    // grabbed the class all array and pushed the instance into that array after it's created
    User.all.push(this);
  }

  // creating a class variable called all
  User.all = []

  User.prototype.description = function() {
    console.log(`${this.username} is ${this.age} years old and ${this.hobby.toLowerCase()}`)
  }

  // creating a class function called printDescriptions
  User.printDescriptions = function() {
    // iterated through all of the user instances and called the user prototype description on them
    User.all.forEach(user => user.description());
  }

  let user = new User("bob", 24, "Likes to play video games");

  // calling the class function for printDescriptions on the User class
  User.printDescriptions();
```

### ES6 Syntax Class Constructor for Objects

As JavaScript grew and evolved, we now have a syntax that we are mostly used to looking at, the class syntax.
```
  class User {
    constructor(username, age, hobby){
      this.username = username;
      this.age = age;
      this.hobby = hobby;
    }
  }
```

The `constructor` is very similiar to ruby's initialize as it gets called when the object is created.

What about the prototypes? Surely defining it outside of the class can be a little harsh on the eyes. With ES6 Syntax, we no longer have to do that.
```
  class User {
    constructor(username, age, hobby){
      this.username = username;
      this.age = age;
      this.hobby = hobby;
    }

    description(){
      console.log(`${this.username} is ${this.age} years old and ${this.hobby.toLowerCase()}`)
    }
  }
```

We defined the prototype function description inside the class. Do take note we did not use the function declaration as ES6 syntax will automatically assume it's a function with ().

So now we have prototype functions and a constructor, what about class scope variables and functions? Luckily for us we now have a static keyword we can use to define class variables and functions within our classes as well!
```
  class User {
    static all = [];

    constructor(username, age, hobby){
      this.username = username;
      this.age = age;
      this.hobby = hobby;
      User.all.push(this);
    }

    description(){
      console.log(`${this.username} is ${this.age} years old and ${this.hobby.toLowerCase()}`)
    }

    static printDescriptions() {
      User.all.forEach(user => user.description());
    }
  }

  let user = new User("bob", 24, "likes to play video games");

  User.printDescriptions();
```

Viola! And that is Object Oriented Javascript! Have fun with it!

> **Note:** static keyword does not work in javascript repl.it