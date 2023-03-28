import React from 'react'
import Path from './Path'
import HeaderFilters from './HeaderFilters'
import SortCategories from './SortCategories'
import Sidebar from './Sidebar/Sidebar'
import Product from '../Product'
import searchPict from '../Main/icons/images.png'

interface IMain {
  products_db: any[]
}

const Main = (props: IMain) => {

  if (props.products_db.length === 0) {
    return (
      <main>
      <Path />
      <HeaderFilters title_name={'Косметика и гигиена'} />
      <SortCategories />
      <div className="content_container">
        <Sidebar />
        <div className="empty_list">
          <h1 className='empty_title'>По Вашему запросу ничего не найдено</h1>
          <img src={searchPict} alt="not_results" />
        </div>

      </div>
    </main>
    )
  }

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