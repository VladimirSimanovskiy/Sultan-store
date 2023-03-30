import React from 'react'
import { Link } from 'react-router-dom'

interface ILink {
  sectionName: string,
  pathName?: string,
  linkName?: string
}

const Path = ({props}: {props: ILink}) => {

  if (!props.linkName) {
    return (
      <div className="path">
        <a className='main_link' href="">Главная</a>
        <Link className='sub_link' to="?tab=one" preventScrollReset={true}>{props.sectionName}</Link>
      </div>
    )
  }

  return (
    <div className="path">
      <a className='main_link' href="">Главная</a>
      { props.pathName &&
        <Link className='main_link' to={props.linkName}>{props.pathName}</Link>
      }
      <Link className='sub_link' to="?tab=one" preventScrollReset={true}>{props.sectionName}</Link>
  </div>
  )
}

export default Path