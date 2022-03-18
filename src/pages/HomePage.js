//import bernardoramalhete from '../images/bernardoramalhetebw.png'
import GetAppIcon from '@mui/icons-material/GetApp';
import MenuModal from '../components/MenuModal'
import Menu from '../components/Menu'
import Cards from '../components/Cards'
import Contact from '../components/Contact'
import { useState, useEffect } from 'react'
import '../styles/homepage.css'

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


  return (
    <>
      <Menu menuControl={menuControl} setMenuControl={setMenuControl} />

      <MenuModal cellPhone={cellPhone} menuControl={menuControl} setMenuControl={setMenuControl} contactControl={contactControl} setContactControl={setContactControl}/>

      <Contact contactControl={contactControl} setContactControl={setContactControl}/>

      <div className={menuControl || contactControl ? "HomePageBody blured" : 'HomePageBody'}>



        <div className='section-title'>
          <h1>&lt;greeting&gt;</h1>
        </div>

        <section className='page-top'>

          <div className='greeting'>
            <h3 className='greeting-top'> Hey, I'm</h3>
            <h2 className='greeting-middle'>Bernardo</h2>
            <h4 className='greeting-bottom'>Fullstack developer</h4>
          </div>

          <button className='btn-cv'><span className='btn-in'>Download CV</span><GetAppIcon sx={{ color: '#EFE9E7', fontSize: '40px' }} /></button>

        </section>

        <Cards cellPhone={cellPhone}/>

      </div>

    </>
  )
}

export default HomePage