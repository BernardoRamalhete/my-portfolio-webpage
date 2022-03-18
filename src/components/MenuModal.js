import {Link} from 'react-router-dom'
import CloseIcon from '@mui/icons-material/Close'
import '../styles/menu-modal.css'

function MenuModal({ menuControl, setMenuControl, contactControl, setContactControl, cellPhone}) {
    return (
        <>

            <div className={menuControl && !contactControl ? 'modal-overlay modal-open' : 'modal-container'} onClick={() => setMenuControl((prevState) => !prevState)}>
            </div>

            <div className={menuControl && !contactControl ? 'menu-modal modal-open' : 'menu-modal'}>
                <span className='menu-modal-title'>
                    <h2>Where do</h2>
                    <h2 className='menu-modal-title-item'>you wanna go?</h2>
                </span>
                <div className='menu-modal-options'>
                    <Link to='/' className='link-to'>
                        <h3 className='menu-modal-option'>Home page</h3>
                    </Link>

                    <Link to='/projects' className='link-to'>
                        <h3 className='menu-modal-option'>My projects</h3>
                    </Link>

                    <Link to='/about' className='link-to'>
                        <h3 className='menu-modal-option'>About me</h3>
                    </Link>

                    
                    <h3 className='menu-modal-option' onClick={() => { setContactControl(true); setMenuControl(false) }}>Contact me</h3>

                    {cellPhone && <CloseIcon className='modal-close-icon' sx={{ fontSize: '70px', transition: 'all 1s ease' }} onClick={() => {setMenuControl(false)}} />}
                </div>
            </div>


        </>
    )
}

export default MenuModal