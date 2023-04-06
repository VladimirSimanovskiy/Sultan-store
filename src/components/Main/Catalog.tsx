import React, { useState } from 'react'
import HeaderFilters from './MainTitle'
import SortCategories from './SortCategories'
import Sidebar from './Sidebar/Sidebar'
import Product from '../Product'
import ReactPaginate from 'react-paginate'
import searchPict from '../Main/icons/images.png'
import previous from '../icons/previous.svg'
import next from '../icons/next.svg'
import { IProduct } from '../../models/models'
import Path from '../Path'
import MainTitle from './MainTitle'

interface IMain {
  products_db: IProduct[]
}

const Main = (props: IMain) => {

  const products_db = props.products_db

  const [pageNumber, setPageNumber] = useState(0)

  const propsObj = {
    sectionName: 'Каталог'
  }

  if (products_db.length === 0) {
    return (
    <main>
      <Path props={propsObj}/>
      <HeaderFilters title_name={'Косметика и гигиена'} />
      <SortCategories />
      <div className="main_container">
        <Sidebar />
        <div className="content_container">
          <div className="empty_list">
            <h1 className='empty_title'>По Вашему запросу ничего не найдено</h1>
            <img src={searchPict} alt="not_results" />
          </div>
        </div>
      </div>
    </main>
    )
  }

  

  const productsPerPage = 12
  const pageVisited = pageNumber * productsPerPage

  const pageCount = Math.ceil(products_db.length / productsPerPage)
  const pageChangeHandler = ({selected}: {selected: number}) => {
    setPageNumber(selected)
    window.scrollTo(0, 0)
  }

  const displayProducts = products_db
  .slice(pageVisited, pageVisited + productsPerPage)
  .map((obj) => {
    return (
      <Product 
      key={obj.id}
      id={obj.id}
      URL={obj.URL} 
      name={obj.name} 
      size_type={obj.size_type} 
      size={obj.size} 
      barcode={obj.barcode} 
      producer={obj.producer} 
      brand={obj.brand} 
      description={obj.description} 
      price={obj.price} 
      types={obj.types} />
    )
  })

  return (
    <main>
      <Path props={propsObj}/>
      <MainTitle title_name={'Косметика и гигиена'} />
      <SortCategories />
      <div className="main_container">
        <Sidebar />
        <div className="content_container">

          <div className="products_container">
            {displayProducts}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel={<img src={next} alt='next'/>}
            onPageChange={pageChangeHandler}
            pageRangeDisplayed={productsPerPage}
            pageCount={pageCount}
            previousLabel={<img src={previous} alt='previous'/>}
            containerClassName={"pagination_container"}
            disabledClassName={"pagination_disabled"}
            activeClassName={"pagination_active"}
          />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum distinctio pariatur consequuntur libero soluta, ipsam dicta ut rem exercitationem quaerat voluptatibus voluptate ea nam architecto id a aliquam excepturi dolore porro cum qui sit adipisci asperiores. Iure nam error consequuntur eaque placeat voluptate officia, molestiae ipsa earum odio ullam tenetur.</p>
        </div>
      </div>

    </main>
  )
}

export default Main