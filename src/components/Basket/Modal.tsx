import React, { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

interface IModalProps {
  active: boolean,
  onClose: () => void
}

const Modal = ({ active , onClose }: PropsWithChildren<IModalProps> ) => {
  if (!active) {
    return null
  }

  return (
    <div className='modal'
         onClick={onClose}
    >
      <div className="modal_content"
           data-testid='modal_content'>
        <div className="modal_header">
          <h1 className="modal_title">Спасибо за заказ</h1>
        </div>
        <div className="modal_footer">
          <Link to='/' data-testid='catalog_link'>
            <button className='btn'
                    onClick={() => onClose}>
              <div className="btn_container">
                <p>Перейти в каталог</p> 
              </div>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Modal