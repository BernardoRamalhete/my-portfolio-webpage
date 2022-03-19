//import bernardoramalhete from '../images/bernardoramalhetebw.png'
import GetAppIcon from '@mui/icons-material/GetApp';
import MenuModal from '../components/MenuModal'
import Menu from '../components/Menu'
import Cards from '../components/Cards'
import Contact from '../components/Contact'
import { useState, useEffect } from 'react'
import '../styles/homepage.css'
import '../styles/homepagewhite.css'
import '../styles/mainWhite.css'

function HomePage() {

  const [menuControl, setMenuControl] = useState(false)
  const [contactControl, setContactControl] = useState(false)

  const [cellPhone, setCellPhone] = useState(false)
  const [pageWidth, setPageWidth] =useState(window.innerWidth)

    const handleResize = () => {
        setPageWidth(window.innerWidth)
    }
    
    useEffect(()=> {
      console.log('Hey, there :)')
        if(pageWidth <= 960) {
            setCellPhone(true)
        } else {
            setCellPhone(false)
        }

        return (window.removeEventListener('resize', handleResize))
    }, [pageWidth])

    window.addEventListener('resize', handleResize)

    const [darkMode, setDarkMode] = useState(false)
    const [blured, setBlured] = useState(false)

    useEffect(()=>{
      if(!darkMode) {
        document.body.classList.add('white')
      } else {
        document.body.classList.remove('white')
      }
    },[darkMode])

    useEffect(()=>{
      if(menuControl || contactControl) {
        setBlured(true)
      } else {
        setBlured(false)
      }
    },[menuControl, contactControl])

  return (
    <>
      <Menu darkMode={darkMode} menuControl={menuControl} setMenuControl={setMenuControl} />

      <MenuModal darkMode={darkMode} setDarkMode={setDarkMode} cellPhone={cellPhone} menuControl={menuControl} setMenuControl={setMenuControl} contactControl={contactControl} setContactControl={setContactControl}/>

      <Contact darkMode={darkMode} contactControl={contactControl} setContactControl={setContactControl}/>

      <div className={
      blured && !darkMode ? "HomePageBody HomePageBodyWhite blured" : 
      !blured && darkMode ? 'HomePageBody' :
      !blured && !darkMode ? 'HomePageBody HomePageBodyWhite' :
      blured && darkMode ? 'HomePageBody blured' : ''}>



        <div className={darkMode ? 'section-title' : 'section-title section-title-white'}>
          <h1>&lt;greeting&gt;</h1>
        </div>

        <section className='page-top'>

          <div className='greeting'>
            <h3 className='greeting-top'> Hey, I'm</h3>
            <h2 className={darkMode ? 'greeting-middle' : 'greeting-middle greeting-middle-white'}>Bernardo</h2>
            <h4 className='greeting-bottom'>Fullstack developer</h4>
          </div>

          <button className={darkMode ? 'btn-cv' : 'btn-cv btn-cv-white'}><span className='btn-in'>Download CV</span><GetAppIcon sx={{ color: '#EFE9E7', fontSize: '40px' }} /></button>

        </section>

        <Cards darkMode={darkMode} cellPhone={cellPhone}/>

      </div>

    </>
  )
}

export default HomePage