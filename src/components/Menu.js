import '../styles/menu-button.css'
import '../styles/menu-button-white.css'

function Menu({menuControl, setMenuControl, darkMode}) {
  return (
    <div className='menu-container' onClick={() => setMenuControl((prevState) => !prevState)}>

        <div className={
          menuControl && darkMode ? 'menu active' : 
          !menuControl && darkMode ? 'menu' : 
          menuControl && !darkMode ? 'menu menu-white active' :
          !menuControl && !darkMode ? 'menu menu-white' : 'menu menu-white'
          }>

          <span className={darkMode ? 'menu-detail' : 'menu-detail menu-detail-white'} />
          <span className={darkMode ? 'menu-detail' : 'menu-detail menu-detail-white'} />
          <span className={darkMode ? 'menu-detail' : 'menu-detail menu-detail-white'} />

        </div>

      </div>
  )
}

export default Menu