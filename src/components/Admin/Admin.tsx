import React, { useState, PropsWithChildren } from 'react'

// components
import AddTab from './AddTab'
import EditTab from './EditTab'
import RemoveTab from './RemoveTab'

interface IModalProps {
  active: boolean,
  onClose: () => void
}

const Admin = ({ active , onClose }: PropsWithChildren<IModalProps> ) => {
  



  const [activeTab, setActiveTab] = useState(0)

  if (!active) {
    return null
  }

  const tabs = ['Добавить товар', 'Редактировать товар', 'Удалить товар']


  return (
    <div className='modal'
          onClick={onClose}>
      <div className="admin_container"
          onClick={e => e.stopPropagation()}>
        <h1 className="admin_title">Управление каталогом товаров</h1>
        <div className='nav_container'>
          <ul className="admin_nav">
            {tabs.map((tabName, i) => (
              <li
                key={i}
                onClick={() => setActiveTab(i)}
                className={activeTab === i ? 'admin_btn active_tab' : 'admin_btn'}>
                  {tabName}
              </li>
            ))}
          </ul>
        </div>

        <AddTab active={activeTab === 0} />
        <EditTab active={activeTab === 1} />
        <RemoveTab active={activeTab === 2} />
      </div>


    </div>
  )
}

export default Admin