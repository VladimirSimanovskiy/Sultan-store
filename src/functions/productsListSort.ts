import { IProduct } from "../models/models";

export function productsListSort(productsList: IProduct[], sortProperty: string) {
  let sortedProducts: IProduct[] = [];

  switch(sortProperty) {
    case 'Название ▲':
      sortedProducts =  productsList.sort( (a: IProduct, b: IProduct) => {
        return ( a.name.toLowerCase() > b.name.toLowerCase()) ? -1 : 1;
      })
      sortedProducts =  sortedProducts.sort( (a: IProduct, b: IProduct) => {
        return ( a.brand.toLowerCase() > b.brand.toLowerCase()) ? 1 : -1;
      })
      break;
    
    case 'Название ▼':
      sortedProducts =  productsList.sort( (a: IProduct, b: IProduct) => {
        return ( a.name.toLowerCase() < b.name.toLowerCase()) ? -1 : 1;
      })
      sortedProducts =  sortedProducts.sort( (a: IProduct, b: IProduct) => {
        return ( a.brand.toLowerCase() < b.brand.toLowerCase()) ? 1 : -1;
      })
      break;

    case 'Цена ▼':
      sortedProducts =  productsList.sort( (a: IProduct, b: IProduct) => b.price - a.price)
      break;

    case 'Цена ▲':
      sortedProducts =  productsList.sort( (a: IProduct, b: IProduct) => a.price - b.price)
      break;
  }
  return sortedProducts
}