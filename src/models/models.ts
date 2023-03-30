export interface IProduct {
  id: number,
  URL: string,
  name: string,
  size_type: string,
  size: number,
  barcode: number,
  producer: string,
  brand: string,
  description: string,
  price: number,
  types: string[]
}

export interface IProduser {
  id: number,
  name: string
}

export interface IPriceRange {
  minPrice: number,
  maxPrice: number
}

export interface IItemsCounter {
  itemCount: number,
  item: IProduct
}

export interface ISelectedItem {
  totalPrice: number,
  totalItems: number,
  items: IItemsCounter[]
}