// * Create a class
class User {
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

export default User
