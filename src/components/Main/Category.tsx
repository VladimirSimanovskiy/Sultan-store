import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from '../../store/store'
import { addCategoryName } from '../../store/slices/filterSlice'

interface IFilter {
  categoryName: string
}

const Category = (props: IFilter) => {

  const dispatch = useDispatch();
  const categoriesName = useSelector((state: RootState) => state.filterSlice.categoryName)

  const [isActiveCategory, setActiveCategory] = useState(false)

  const onClickCategory = (categoryName: string) => {
    dispatch(addCategoryName(categoryName.toLowerCase()))
    return setActiveCategory(!isActiveCategory);
  }

  return (
    <li 
    onClick={() : void => onClickCategory(props.categoryName)}
    onDoubleClick={(event): boolean => {
      event.stopPropagation();
      return false;
    }}
    className={(categoriesName.includes(props.categoryName.toLowerCase())) ? 'category_selected' : ''}>
    {props.categoryName}
</li>
  )
}

export default Category