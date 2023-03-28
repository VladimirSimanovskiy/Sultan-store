import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'
//import { setCategoryName } from '../../store/slices/filterSlice'

interface IMain {
  title_name: string,
}

const HeaderFilters = (props: IMain) => {

  const dispatch = useDispatch()
  const catergoryName = useSelector((state: RootState) => state.filterSlice.categoryName);

  const [sortActive, setSortActive] = useState(false);
  const [sortSelected, setSortSelected] = useState(0);

  const sortList = [
                    `Название ▼`,
                    `Название ▲`,
                    `Цена ▼`,
                    `Цена ▲`,
                  ]

  /*const setSortItem = (itemID: number) => {
    setSortSelected(itemID);
    setSortActive(false)
  }*/

  /*const onClickCategory = (sortName: string) => {
    dispatch(setCategoryName(sortName))
    console.log(dispatch)

  }*/

  //const setSortActive = () => {}
  //const sortActive = false

  return (
    <div className='header_filter'>
      <h1 className="main_title">{props.title_name}</h1>
      <div className="sort">
        <b>Сортировка:</b>
        <div onClick={() => setSortActive(!sortActive)} className="sort_arrow">
          <span>{sortList[sortSelected]}</span>
        </div>
      </div>

      <div className={sortActive ? "sort_list active" : "sort_list"}
          onClick={e => e.stopPropagation()}>
        <ul>
          {sortList.map((sortName, sortId) => (
            <li
              key={sortId}
              /*onClick={() => onClickCategory(sortName)}*/
              className={sortSelected === sortId ? "sort_selected" : ''}>
              {sortName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HeaderFilters