import React from 'react'
import Category from '../Category'

const SidebarCategories = () => {
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
    <div className='sb_categories'>
      <h2 className='sb_categories_titile'>категории</h2>
      <ul className='categories_list sidebar_categories'>
        {categories.map((categoryName: string, categoryID: number) => (
          <Category 
              key={categoryID}
              categoryName={categoryName} />
        ))}
      </ul>
    </div>
  )
}

export default SidebarCategories