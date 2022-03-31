import Contact from '../components/Contact'
import Menu from '../components/Menu'
import MenuModal from '../components/MenuModal'
import {useState, useEffect} from 'react'
import bernardoramalhete from '../images/bernardo-ramalhete.png'
import '../styles/about.css'
import '../styles/about-white.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function About({darkMode, setDarkMode}) {

    const [menuControl, setMenuControl] = useState(false)
    const [contactControl, setContactControl] = useState(false)
    const [cellPhone, setCellPhone] = useState(false)
    const [pageWidth, setPageWidth] =useState(window.innerWidth)

    const handleResize = () => {
        setPageWidth(window.innerWidth)
    }
    
    useEffect(()=> {
        if(pageWidth <= 960) {
            setCellPhone(true)
        } else {
            setCellPhone(false)
        }
        return (window.removeEventListener('resize', handleResize))
    }, [pageWidth])

    window.addEventListener('resize', handleResize)

    const [iconColor, setIconColor] = useState('#efe9e7')

    useEffect(()=>{
        if(!darkMode) {
          document.body.classList.add('white')
          setIconColor('#1818187a')
        } else {
          document.body.classList.remove('white')
          setIconColor('#efe9e7')
        }
      },[darkMode])

    return (
        <>
            <Menu darkMode={darkMode} menuControl={menuControl} setMenuControl={setMenuControl} />
            <MenuModal thisPage={'About'} setDarkMode={setDarkMode} darkMode={darkMode} cellPhone={cellPhone} menuControl={menuControl} setMenuControl={setMenuControl} contactControl={contactControl} setContactControl={setContactControl} />

            <Contact darkMode={darkMode} contactControl={contactControl} setContactControl={setContactControl} />
            <div className={menuControl || contactControl ? "AboutBody blured" : 'AboutBody'}>
                <div className={darkMode ? 'section-title' : 'section-title section-title-white'}>
                    <h1>&lt;about&gt;</h1>
                </div>

                <div className='about'>

                    <div className={darkMode ? 'about-box' : 'about-box about-box-white'}>
                    <div className='about-img' style={!cellPhone ? {display: 'none'} : {}}>
                        <img src={bernardoramalhete} alt='Bernardo Ramalhete' className='bernardo-ramalhete' />
                    </div>
                        <p className={darkMode ? 'about-text':'about-text about-text-white'}>
                            My name is Bernardo Ramalhete and I begin codding when I was 17. I entered college into a Computer Science course, with I go through before being forced to drop out for family related problems. I then got into design and worked as a freelancer for about 4 years. So in 2021 I got back into studying to become a developer, reading everything I could find, making the Harvard's CS50 course to reinforce my base knowledge, and a online bootcamp to get me up to speed with the currently techs and putting in the work in some projects. Now I'm seeking a oportunity to launch a career in the web development industry. Being eager to learn more and solve real world problems. 
                        </p>
                    </div>
                        <div className={darkMode ? 'about-contact':'about-contact about-contact-white'}>
                            <h2 className={darkMode? 'about-contact-h2':'about-contact-h2 about-contact-h2-white'}>Wanna get in touch?</h2>
                            <p className='about-contact-p'>Reach out via the contact form in the top menu, or you can just use these:</p>
                            <div className='about-contact-info'>
                                <div className={darkMode? 'about-contact-wpp' : 'about-contact-wpp about-contact-wpp-white'}>
                                    <a style={{color: iconColor}} href='https://whatsa.me/5535991526033'><WhatsAppIcon sx={{fontSize: '40px', cursor:'pointer', transition: 'all 0.5s ease', '&:hover': {fontSize: '50px'}}}/></a>
                                    <p className={darkMode?'about-contact-item': 'about-contact-item about-contact-item-white'}>+55 35 9 9152-6033</p>
                                </div>
                                <div className={darkMode? 'about-contact-email' : 'about-contact-email about-contact-email-white'}>
                                    <a style={{color: iconColor}} href='mailto:fb@hsjonline.com'><EmailIcon sx={{fontSize: '40px', cursor:'pointer', transition: 'all 0.5s ease', '&:hover': {fontSize: '50px'}}}/></a>
                                    <p className={darkMode?'about-contact-item': 'about-contact-item about-contact-item-white'}>fb@hsjonline.com</p>
                                </div>
                            </div>
                        </div>
                    <div className='about-img' style={cellPhone ? {display: 'none'} : {}}>
                        <img src={bernardoramalhete} alt='Bernardo Ramalhete' className='bernardo-ramalhete' />
                    </div>

                </div>
            </div>

        </>
    )
}

export default About