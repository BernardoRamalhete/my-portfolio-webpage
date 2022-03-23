import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import '../styles/menu-modal.css'
import '../styles/menu-modal-white.css'
import LightModeSwitch from '../components/LightModeSwitch'

function MenuModal({ menuControl, setMenuControl, contactControl, setContactControl, cellPhone, darkMode, setDarkMode, thisPage }) {

    const [switchValue, setSwitchValue] = useState(false)
    const handleSwitch = () => {
        setSwitchValue((prevState) => !prevState)
    }

    useEffect(() => {
        if(darkMode) {
            setSwitchValue(true)
        }
    }, [darkMode])

    useEffect(() => {
        setDarkMode(switchValue)
    }, [switchValue, setDarkMode])



    return (
        <>

            <div className=
                {menuControl && !contactControl ? 'modal-overlay modal-open' : 'modal-overlay'} onClick={() => setMenuControl((prevState) => !prevState)}>
            </div>

            <div className={
                menuControl && !contactControl && !darkMode ? 'menu-modal menu-modal-white modal-open' : 
                menuControl && !contactControl && darkMode ? 'menu-modal modal-open' : 'menu-modal'}
                >
                {cellPhone && <CloseIcon className={!darkMode ? 'modal-close-icon modal-close-icon-white' : 'modal-close-icon'} sx={{fontSize: '70px', transition: 'all 1s ease' }} onClick={() => { setMenuControl(false) }} />}
                <span className={darkMode ? 'menu-modal-title' : 'menu-modal-title menu-modal-title-white'}>
                    <h2>Where do</h2>
                    <h2 className={darkMode ?"menu-modal-title-item" :'menu-modal-title-item menu-modal-title-item-white'}>you wanna go?</h2>
                </span>
                <div className='menu-modal-options'>
                    {thisPage !== 'HomePage' && <Link to='/' className='link-to'>
                        <h3 className={darkMode ? 'menu-modal-option' : 'menu-modal-option menu-modal-option-white'}>Home page</h3>
                    </Link>}

                    {thisPage !== 'Projects' && <Link to='/projects' className='link-to'>
                        <h3 className={darkMode ? 'menu-modal-option' : 'menu-modal-option menu-modal-option-white'}>My projects</h3>
                    </Link>}

                    {thisPage !== 'About' && <Link to='/about' className='link-to'>
                        <h3 className={darkMode ? 'menu-modal-option' : 'menu-modal-option menu-modal-option-white'}>About me</h3>
                    </Link>}


                    <h3 className={darkMode ? 'menu-modal-option' : 'menu-modal-option menu-modal-option-white'} onClick={() => { setContactControl(true); setMenuControl(false) }}>Contact me</h3>

                    <LightModeSwitch darkMode={darkMode} handleSwitch={handleSwitch} />


                </div>
            </div>


        </>
    )
}

export default MenuModal