import { Link, useNavigate } from 'react-router-dom'

// images
import back from './icons/back.svg'

interface ILink {
  sectionName: string,
  pathName?: string,
  linkName?: string
}

const Path = ({props}: {props: ILink}) => {

  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1)
    window.scrollTo(0, 0)
  }

  if (!props.linkName) {
    return (
      <>
        <div className="path">
          <Link to='/' className='main_link'>Главная</Link>
          <a className='sub_link'>{props.sectionName}</a>
        </div>

        <div className="mobile_back">
          <button className="mobile_menu_button"
                  onClick={() => goBack()}>
          <img src={back} alt="back_icon" />
          </button>
          <span className="back_title"
                onClick={() => goBack()}>
            назад
          </span>
        </div>
      </>
    )
     

  }

  return (
    <>
      <div className="path">
        <Link to='/' className='main_link'>Главная</Link>
        { props.pathName &&
          <Link className='main_link' to={props.linkName}>{props.pathName}</Link>
        }
        <a className='sub_link'>{props.sectionName}</a>
      </div>

      <div className="mobile_back">
      <button className="mobile_menu_button"
              onClick={() => goBack()}>
      <img src={back} alt="back_icon" />
      </button>
      <span className="back_title"
            onClick={() => goBack()}>
        назад
      </span>
      </div>
    </>

  )
}

export default Path