export class Singleton {
  private static instance: Singleton
  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton()
    }
    return Singleton.instance
  }

  public someMethod(): void {
    console.log('Singleton method called')
  }
}

// ---

export function run() {
  const instance1 = Singleton.getInstance()
  const instance2 = Singleton.getInstance()

  console.log(`Is same instance: ${instance1 === instance2}`) // true
  instance1.someMethod() // Calling method on singleton instance
}
