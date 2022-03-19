import Contact from '../components/Contact'
import Menu from '../components/Menu'
import MenuModal from '../components/MenuModal'
import {useState, useEffect} from 'react'
import bernardoramalhete from '../images/bernardo-ramalhete.png'
import '../styles/about.css'
import '../styles/about-white.css'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

function About() {

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

    const [darkMode, setDarkMode] = useState(false)

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
            <MenuModal setDarkMode={setDarkMode} darkMode={darkMode} cellPhone={cellPhone} menuControl={menuControl} setMenuControl={setMenuControl} contactControl={contactControl} setContactControl={setContactControl} />

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
                            My name is Bernardo Ramalhete, I'm 25 years old, married, father of two. I started coding back in 2014, when I got into the Universidade do Espírito Santo, in the Computer Science major. I completed half of the course before dropping out due to family problems. Then 2 years later I got back into development, more specifically web applications. Since then I made a goal to code better each day, with more responsive, faster and cleaner code apps as possible!
                        </p>
                    </div>
                        <div className={darkMode ? 'about-contact':'about -contact about-contact-white'}>
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