import Contact from '../components/Contact'
import Menu from '../components/Menu'
import MenuModal from '../components/MenuModal'
import {useState, useEffect} from 'react'
import bernardoramalhete from '../images/bernardo-ramalhete.png'
import '../styles/about.css'

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

    return (
        <>
            <Menu menuControl={menuControl} setMenuControl={setMenuControl} />

            <MenuModal cellPhone={cellPhone} menuControl={menuControl} setMenuControl={setMenuControl} contactControl={contactControl} setContactControl={setContactControl} />

            <Contact contactControl={contactControl} setContactControl={setContactControl} />
            <div className={menuControl || contactControl ? "AboutBody blured" : 'AboutBody'}>
                <div className='section-title'>
                    <h1>&lt;about&gt;</h1>
                </div>

                <div className='about'>

                    <div className='about-box'>
                    <div className='about-img' style={!cellPhone ? {display: 'none'} : {}}>
                        <img src={bernardoramalhete} alt='Bernardo Ramalhete' className='bernardo-ramalhete' />
                    </div>
                        <p className='about-text'>
                            My name is Bernardo Ramalhete, I'm 25 years old, married, father of two. I started coding back in 2014, when I got into the Universidade do Espírito Santo, in the Computer Science major. I completed half of the course before dropping out due to family problems. So 2 years later I got back into development, more specifically web applications. Since then I made a goal to code better each day, with more responsive, faster and cleaner code apps as possible!
                        </p>
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