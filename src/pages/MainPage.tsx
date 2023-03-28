import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import products from '../assets/products.json'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { IProduct } from '../models/models'
import { productsListSort } from '../functions/productsListSort'

export default function () {

  const categoriesName = useSelector((state: RootState) => state.filterSlice.categoryName)
  const producerName = useSelector((state: RootState) => state.filterSlice.producerName)
  const sortProperty = useSelector((state: RootState) => state.filterSlice.sortProperty)
  const minPrice = useSelector((state: RootState) => state.filterSlice.minPrice)
  const maxPrice = useSelector((state: RootState) => state.filterSlice.maxPrice)

  let productsList: IProduct[] = (categoriesName.length === 0) 
                                    ? products.products
                                    : products.products.filter(item => categoriesName.includes(item.type.toLowerCase()))

  productsList = (producerName.length === 0)
                  ? productsList
                  : productsList.filter(item => producerName.includes(item.producer.toLowerCase()))

  productsList = productsList.filter(item => item.price >= Number(minPrice) && item.price <= Number(maxPrice))


  const sortedProducts = productsListSort(productsList, sortProperty)

  return (
    <div>
      <Header />
      <Main products_db={sortedProducts} />
    </div>
  )
}
