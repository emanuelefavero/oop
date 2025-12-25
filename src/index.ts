import { run as runSingleton } from '#/singleton/singleton.js'
import { run as runClass } from '#/class/class.js'

// * Execute the run functions to demonstrate functionality
console.log('-- Class --')
runClass()
console.log('-- Singleton --')
runSingleton()
