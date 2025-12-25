// * Create a class
export class User {
  constructor(public name: string, private age: number) {}

  // * Public method
  public getAge(): number {
    return this.age
  }

  // * Private method
  // Can only be accessed within the class
  private updateAge(newAge: number): void {
    this.age = newAge
  }

  // * Static method
  // Belongs to the class itself rather than to any specific instance
  public static isAdult(age: number): boolean {
    return age >= 18
  }
}

// ---

export function run() {
  const user = new User('John', 24)
  console.log(user)

  console.log(`User Name: ${user.name}`) // Accessing public property

  // Accessing public method, private property 'age' is not accessible directly
  const userAge = user.getAge()
  console.log(`User Age: ${userAge}`)

  // Accessing static method `isAdult`, which cannot be called on instance
  console.log(`Is Adult: ${User.isAdult(userAge)}`)
}
