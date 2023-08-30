// * Create a class
class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  getAge() {
    return this.age
  }
}

let user = new User('John', 34)
console.log(user.getAge()) // 34
console.log(user) // User { name: 'John', age: 34 }

// * Extending classes
class Admin extends User {
  constructor(name, age, role) {
    super(name, age) // call the parent constructor
    this.role = role
  }

  getRole() {
    return this.role
  }
}

let admin = new Admin('John', 34, 'admin')

console.log(admin.getAge()) // 34
console.log(admin.getRole()) // admin

// * Static methods - methods that are called on the class itself
class Cat {
  static meow() {
    console.log('Meow!')
  }
}

Cat.meow() // Meow!

// * Getters and setters
class Parrot {
  constructor(name) {
    this.name = name
  }

  get name() {
    return this._name // _name is a convention to indicate that this is a private property
  }

  set name(value) {
    this._name = value
  }
}

let parrot = new Parrot('Birdie')
console.log(parrot.name) // Birdie
parrot.name = 'Belle'
console.log(parrot.name) // Belle
