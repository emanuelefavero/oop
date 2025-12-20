import Singleton from '#/singleton/singleton.js'
import User from '#/class/class.js'

// * Class
const user = new User('John', 24)
console.log(user)

console.log(`User Name: ${user.name}`) // Accessing public property

// Accessing public method, private property 'age' is not accessible directly
const userAge = user.getAge()
console.log(`User Age: ${userAge}`)

// Accessing static method `isAdult`, which cannot be called on instance
console.log(`Is Adult: ${User.isAdult(userAge)}`)

// * Singleton
const instance1 = Singleton.getInstance()
const instance2 = Singleton.getInstance()

console.log(`Is same instance: ${instance1 === instance2}`) // true
instance1.someMethod() // Calling method on singleton instance
