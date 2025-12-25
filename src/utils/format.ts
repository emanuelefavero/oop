import c from 'ansi-colors'

// TODO Refactor to use strings instead of functions for colors (e.g., 'PRIMARY', 'SECONDARY', etc. instead of c.magenta, c.gray, etc.)
// TODO Add a utility closure to alternate between two colors and use it in title with COLORS.PRIMARY and COLORS.ACCENT to show alternate colors every time the title function is called

const COLORS = {
  PRIMARY: c.magenta,
  SECONDARY: c.gray,
  ACCENT: c.blue,
  SUCCESS: c.green,
  WARNING: c.yellow,
  DANGER: c.red,
} as const

export function colorText(
  text: string,
  color: (str: string) => string
): string {
  return color(text)
}

export function formatTitle(text: string): string {
  return `\n✦✦ ${text} ✦✦`
}

export function title(text: string): void {
  console.log(colorText(formatTitle(text), COLORS.PRIMARY))
}
