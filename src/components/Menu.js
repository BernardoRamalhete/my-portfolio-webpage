import '../styles/menu-button.css'

function Menu({menuControl, setMenuControl}) {
  return (
    <div className='menu-container' onClick={() => setMenuControl((prevState) => !prevState)}>

        <div className={menuControl ? 'menu active' : 'menu'}>

          <span className='menu-detail' />
          <span className='menu-detail' />
          <span className='menu-detail' />

        </div>

      </div>
  )
}

export default Menu