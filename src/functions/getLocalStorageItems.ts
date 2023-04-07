import { IProduct } from "../models/models"

export function getLocalStorageItems() {
  const items: IProduct[] = []

  for(let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue;
    }

    const item = localStorage.getItem(key)

    if (typeof item === 'string') {
      items.push(JSON.parse(item))
    }
  }

  return items
}