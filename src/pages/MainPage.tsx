import Header from '../components/Header/Header'
import Catalog from '../components/Main/Catalog'
import Footer from '../components/Footer/Footer'
import JsonProducts from '../assets/products.json'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { IProduct } from '../models/models'
import { productsListSort } from '../functions/productsListSort'

export default function MainPage() {

  const categoriesName = useSelector((state: RootState) => state.filterSlice.categoryName)
  const producerName = useSelector((state: RootState) => state.filterSlice.producerName)
  const sortProperty = useSelector((state: RootState) => state.filterSlice.sortProperty)
  const minPrice = useSelector((state: RootState) => state.filterSlice.minPrice)
  const maxPrice = useSelector((state: RootState) => state.filterSlice.maxPrice)
  const searchProducer = useSelector((state: RootState) => state.filterSlice.searchName)

  if (localStorage.length === 0) {
    JsonProducts.products.forEach(item => localStorage.setItem(item.barcode.toString(), JSON.stringify(item)))
  }


  let products: any = []

  for(let key in localStorage) {
    if (!localStorage.hasOwnProperty(key)) {
      continue;
    }

    const item = localStorage.getItem(key)

    if (typeof item === 'string') {
      products.push(JSON.parse(item))
    }
  }

  function filterForCategories(productItem: IProduct) {
    for (let item of productItem.types) {
      if (categoriesName.includes(item.toLowerCase())) return true
    }
    return false
  }

  let productsList: IProduct[] = (categoriesName.length === 0) 
                                    ? products
                                    : products.filter((item: IProduct) => filterForCategories(item))

                              
  if (!searchProducer) {
    productsList = (producerName.length === 0)
                    ? productsList
                    : productsList.filter(item => producerName.includes(item.producer.toLowerCase()))
  } else {
    productsList = productsList.filter(item => item.producer.toLowerCase().includes(searchProducer.toLowerCase()))
  }

  productsList = productsList.filter(item => item.price >= Number(minPrice) && item.price <= Number(maxPrice))

  const sortedProducts = productsListSort(productsList, sortProperty)

  return (
    <div>
      <Header />
      <Catalog products_db={sortedProducts} />
      <Footer />
    </div>
  )
}
