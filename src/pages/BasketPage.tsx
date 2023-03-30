import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import Basket from '../components/Basket/Basket'

import JsonProducts from '../assets/products.json'

export default function BasketPage() {

  return (
    <div>
      <Header />
      <Basket />
      <Footer />
    </div>
  )
}
