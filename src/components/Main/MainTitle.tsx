import Sorting from './Sorting'

interface IMain {
  title_name: string,
}

const MainTitle = (props: IMain) => {

  const sortList: string[] = [
                    `Название ▼`,
                    `Название ▲`,
                    `Цена ▼`,
                    `Цена ▲`,
                  ]

  return (
    <div className='header_filter'>
      <h1 className="main_title">{props.title_name}</h1>
      <Sorting sortList={sortList}/>

    </div>
  )
}

export default MainTitle