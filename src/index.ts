import Singleton from './singleton/singleton.js'

// Singleton
const instance1 = Singleton.getInstance()
const instance2 = Singleton.getInstance()

console.log(instance1 === instance2) // true (same instance)
instance1.someMethod()
