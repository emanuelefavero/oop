import { run as runSingleton } from '#/singleton/singleton.js'
import { run as runClass } from '#/class/class.js'
import { title } from '#/utils/format.js'

// * Execute the run functions to demonstrate functionality
title('Class')
runClass()
title('Singleton')
runSingleton()
