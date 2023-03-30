import React from 'react'
import Path from '../Path'

const Card = () => {

  const props = {
    sectionName: 'Название товара',
    pathName: 'Каталог товаров',
    linkName: '/'
  }


  return (
    <main>
      <Path props={props}/>

    </main>
  )
}

export default Card