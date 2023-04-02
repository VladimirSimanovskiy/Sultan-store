export function handleNumberInput(value: any) {
  let validValue = value.replace(/\D/g, '')
  validValue = validValue.replace(/^0/g, '')
  return validValue
}