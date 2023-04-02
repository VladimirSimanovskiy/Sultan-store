export function isValidPrice(value: string) {
  return value.match(/^\d{1,5}[,.]\d{2}$/) ? true : false
}