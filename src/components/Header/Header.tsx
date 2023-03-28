import FullscreenHeader from './Fullscreen/FullscreenHeader';
import TabletHeader from './Tablet/TabletHeader';

const Header = () => {

  return (
    <div className='headerWrapper'>
      <FullscreenHeader />
      <TabletHeader/>
    </div>
  )
}

export default Header