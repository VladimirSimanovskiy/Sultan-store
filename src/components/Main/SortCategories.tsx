import React, { useState } from 'react'
import Category from './Category';

const SortCategories = () => {

  const categories: string[] = [
                      'Уход за телом',
                      'Уход за руками',
                      'Уход за ногами',
                      'Уход за лицом',
                      'Уход за волосами',
                      'Средства для загара',
                      'Средства для бритья',
                      'Подарочные наборы',
                      'Гигиеническая продукция',
                      'Гигиена полости рта',
                      'Бумажная продукция'
                     ]


  return (
    <div className='categories'>
      <ul className='categories_list'>
        {categories.map((categoryName: string, categoryID: number) => (
          <Category 
              key={categoryID}
              categoryName={categoryName} />
        ))}
      </ul>
    </div>
  )
}

export default SortCategories