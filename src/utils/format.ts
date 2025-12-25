import c from 'ansi-colors'

export function title(text: string): void {
  console.log(c.blue(`\n=== ${text} ===`))
}
