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
  type: string
}

export interface IProduser {
  id: number,
  name: string
}

export interface IPriceRange {
  minPrice: number,
  maxPrice: number
}