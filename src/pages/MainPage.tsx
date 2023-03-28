import React from 'react'
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import products from '../assets/products.json'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { IProduct } from '../models/models'

export default function () {

  const categoriesName = useSelector((state: RootState) => state.filterSlice.categoryName)

  const products_list: IProduct[] = (categoriesName.length === 0) 
                                    ? products.products
                                    : products.products.filter(item => categoriesName.includes(item.type.toLowerCase()))
                                    

  return (
    <div>
      <Header />
      <Main products_db={products_list} />
    </div>
  )
}
