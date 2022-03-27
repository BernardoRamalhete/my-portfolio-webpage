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

function HomePage({darkMode, setDarkMode}) {

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

      <MenuModal thisPage={'HomePage'} darkMode={darkMode} setDarkMode={setDarkMode} cellPhone={cellPhone} menuControl={menuControl} setMenuControl={setMenuControl} contactControl={contactControl} setContactControl={setContactControl}/>

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

          <div>
            <a href='https://drive.google.com/file/d/1V0VFKB5gEE0DFmwC4Nk3fjP2Css90L92/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
            <button className={darkMode ? 'btn-cv' : 'btn-cv btn-cv-white'}><span className='btn-in'>Download CV</span><GetAppIcon sx={{ color: '#EFE9E7', fontSize: '40px' }} /></button>
            </a>
            <a href='https://github.com/BernardoRamalhete' className={darkMode ? 'github-link' : 'github-link github-link-white'} target='_blank' rel='noopener noreferrer' >Access my GitHub profile</a>
          </div>

        </section>


      </div>

        <Cards darkMode={darkMode} cellPhone={cellPhone}/>
    </>
  )
}

export default HomePage