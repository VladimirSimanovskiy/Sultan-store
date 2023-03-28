import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'
import { setSortProperty } from '../../store/slices/filterSlice'

interface IMain {
  title_name: string,
}

const HeaderFilters = (props: IMain) => {

  const dispatch = useDispatch()
  const sortProperty = useSelector((state: RootState) => state.filterSlice.sortProperty);

  const [sortActive, setSortActive] = useState(false);

  const sortList = [
                    `Название ▼`,
                    `Название ▲`,
                    `Цена ▼`,
                    `Цена ▲`,
                  ]

  const onClickSort = (sortName: string) => {
    dispatch(setSortProperty(sortName))
    setSortActive(!sortActive)
  }

  return (
    <div className='header_filter'>
      <h1 className="main_title">{props.title_name}</h1>
      <div className="sort">
        <b>Сортировка:</b>
        <div onClick={() => setSortActive(!sortActive)} className="sort_arrow">
          <span>{sortProperty}</span>
        </div>
      </div>

      <div className={sortActive ? "sort_list active" : "sort_list"}
          onClick={e => e.stopPropagation()}>
        <ul>
          {sortList.map((sortName, sortId) => (
            <li
              key={sortId}
              onClick={() => onClickSort(sortName)}
              className={sortProperty === sortName ? "sort_selected" : ''}>
              {sortName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default HeaderFilters