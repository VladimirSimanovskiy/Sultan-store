import React, { useState, useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'
import { setSortProperty } from '../../store/slices/filterSlice'

const Sorting = ({sortList}: {sortList: string[]}) => {

  const dispatch = useDispatch()
  const sortProperty = useSelector((state: RootState) => state.filterSlice.sortProperty);

  const [sortActive, setSortActive] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const onClickSort = (sortName: string) => {
    dispatch(setSortProperty(sortName))
    setSortActive(!sortActive)
  }

  useEffect(() => {
    const handleClickOutside = (event: { composedPath: () => any[] }) => {
      let path: any[] = event.composedPath()
      if (!path.includes(sortRef.current)) {
        setSortActive(false)
      }
    }
  
    document.body.addEventListener('click', handleClickOutside)

    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <>
      <div ref={sortRef} className="sort">
        <b>Сортировка:</b>
        <div onClick={() => setSortActive(!sortActive)} className="sort_arrow">
          <p>{sortProperty}</p>
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
    </>
  )
}

export default Sorting