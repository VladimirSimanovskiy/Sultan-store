import React from 'react'
import Path from './Path'
import HeaderFilters from './HeaderFilters'
import SortCategories from './SortCategories'
import Sidebar from './Sidebar/Sidebar'
import Product from '../Product'

interface IMain {
  products_db: any[]
}

const Main = (props: IMain) => {

  return (
    <main>
      <Path />
      <HeaderFilters title_name={'Косметика и гигиена'} />
      <SortCategories />
      <div className="content_container">
        <Sidebar />
        <div className="products_container">
          {
            props.products_db.map((obj) => (
              <Product 
                  key={obj.id}
                  URL={obj.URL} 
                  name={obj.name} 
                  size_type={obj.size_type} 
                  size={obj.size} 
                  barcode={obj.barcode} 
                  producer={obj.producer} 
                  brand={obj.brand} 
                  description={obj.description} 
                  price={obj.price} 
                  type={obj.type} />
          ))}
        </div>

      </div>


    </main>
  )
}

export default Main