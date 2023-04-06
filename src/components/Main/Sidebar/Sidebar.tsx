import React from 'react'
import PriceSelection from './PriceSelection'
import CheckboxBlock from './CheckboxBlock'
import SidebarCategories from './SidebarCategories'
import Sorting from '../Sorting'

const Sidebar = () => {

  const producers = [
                    {id: 1, name: 'Grifon'},
                    {id: 2, name: 'Boyscout'},
                    {id: 3, name: 'Paclan'},
                    {id: 4, name: 'Булгари Грин'},
                    ]

  const sortList: string[] = [
                    `Название ▼`,
                    `Название ▲`, 
                    `Цена ▼`,
                    `Цена ▲`,
                  ]


  return (
    <div className='sidebar'>
      <h2 className='sidebar_title'>подбор по параметрам</h2>
      <PriceSelection />
      <CheckboxBlock title={'Производитель'} producers={producers} />
      <SidebarCategories />
      <div className="sidebar_sort">
        <Sorting sortList={sortList}/>
      </div>


    </div>
  )
}

export default Sidebar