import c from 'ansi-colors'

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
