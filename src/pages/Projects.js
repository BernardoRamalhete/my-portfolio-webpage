import Contact from '../components/Contact'
import Menu from '../components/Menu'
import MenuModal from '../components/MenuModal'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { useState, useEffect } from 'react'
import '../styles/projects.css'
import '../styles/projects-white.css'

function Projects({darkMode, setDarkMode}) {
    const [menuControl, setMenuControl] = useState(false)
    const [contactControl, setContactControl] = useState(false)
    const [imgHovered, setImgHovered] = useState(false)
    const [iconSize, setIconSize] = useState('150px')

    const [iconColor, setIconColor] = useState('#F0386B')
    const [arrowColor, setArrowColor] = useState('#EFE9E7')

    const reactIcon = <svg className='project-icon-img' viewBox="0 0 128 128">
        <g fill={iconColor}>
            <circle cx="64" cy="64" r="11.4"></circle>
            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
        </g>
    </svg>
    const mongoIcon = <svg className='project-icon-img' viewBox="0 0 128 128">
        <path fillRule="evenodd" clipRule="evenodd" fill={iconColor} d="M90.491 57.282c-.37-4.79-1.496-9.409-3.062-13.934-3.244-10.104-8.45-19.046-15.783-26.74-1.854-1.946-3.916-3.729-5.209-6.151-.818-1.532-1.597-3.085-2.394-4.629l-.505-1.273c-.085.292-.139.396-.142.501-.065 2.517-1.491 4.224-3.267 5.817-1.997 1.793-3.856 3.739-5.775 5.618l-5.901 7.763c-1.592 2.925-3.182 5.85-4.772 8.775l-3.19 8.617-.096.134c-1.756 5.768-2.622 11.698-3.048 17.688-.16 2.251.022 4.535.149 6.798.181 3.235.743 6.415 1.586 9.545 3.062 11.372 9.276 20.805 17.771 28.819 1.579 1.489 3.199 2.843 4.847 4.26.282-.965.507-1.93.763-2.895.256-.961.515-1.917.688-2.881-.174.964-.369 1.92-.562 2.881l-.826 2.895.738 2.501.684 3.884.326 4.053c-.003.823-.036 1.648.014 2.47.012.21.288.404.442.606l1.376.483 1.434.558-.246-3.603-.011-3.548.495-5.405.359-1.177 1.027-1.82c1.268-1.02 2.629-1.946 3.784-3.081 2.09-2.054 4.175-4.134 6.045-6.383a47.846 47.846 0 006.191-9.516c1.122-2.284 2.178-4.614 3.052-7.001.77-2.104 1.247-4.315 1.854-6.479.054-.156.126-.309.16-.468 1.254-5.841 1.465-11.741 1.004-17.682zm-23.599 49.375l-.805-1.763.805 1.763 1.183 1.01-1.183-1.01z"></path>
    </svg>
    const javaScriptIcon = <svg className='project-icon-img' viewBox="0 0 128 128">
        <path fill={iconColor} d="M2 1v125h125V1H2zm66.119 106.513c-1.845 3.749-5.367 6.212-9.448 7.401-6.271 1.44-12.269.619-16.731-2.059-2.986-1.832-5.318-4.652-6.901-7.901l9.52-5.83c.083.035.333.487.667 1.071 1.214 2.034 2.261 3.474 4.319 4.485 2.022.69 6.461 1.131 8.175-2.427 1.047-1.81.714-7.628.714-14.065C58.433 78.073 58.48 68 58.48 58h11.709c0 11 .06 21.418 0 32.152.025 6.58.596 12.446-2.07 17.361zm48.574-3.308c-4.07 13.922-26.762 14.374-35.83 5.176-1.916-2.165-3.117-3.296-4.26-5.795 4.819-2.772 4.819-2.772 9.508-5.485 2.547 3.915 4.902 6.068 9.139 6.949 5.748.702 11.531-1.273 10.234-7.378-1.333-4.986-11.77-6.199-18.873-11.531-7.211-4.843-8.901-16.611-2.975-23.335 1.975-2.487 5.343-4.343 8.877-5.235l3.688-.477c7.081-.143 11.507 1.727 14.756 5.355.904.916 1.642 1.904 3.022 4.045-3.772 2.404-3.76 2.381-9.163 5.879-1.154-2.486-3.069-4.046-5.093-4.724-3.142-.952-7.104.083-7.926 3.403-.285 1.023-.226 1.975.227 3.665 1.273 2.903 5.545 4.165 9.377 5.926 11.031 4.474 14.756 9.271 15.672 14.981.882 4.916-.213 8.105-.38 8.581z"></path>
    </svg>
    const htmlIcon = <svg className='project-icon-img' viewBox="0 0 128 128">
        <path fill={iconColor} d="M9.032 2l10.005 112.093 44.896 12.401 45.02-12.387L118.968 2H9.032zm89.126 26.539l-.627 7.172L97.255 39H44.59l1.257 14h50.156l-.336 3.471-3.233 36.119-.238 2.27L64 102.609v.002l-.034.018-28.177-7.423L33.876 74h13.815l.979 10.919L63.957 89H64v-.546l15.355-3.875L80.959 67H33.261l-3.383-38.117L29.549 25h68.939l-.33 3.539z"></path>
    </svg>
    const cssIcon = <svg className='project-icon-img' viewBox="0 0 128 128">
        <path fill={iconColor} d="M8.76 1l10.055 112.883 45.118 12.58 45.244-12.626L119.24 1H8.76zm89.591 25.862l-3.347 37.605.01.203-.014.467v-.004l-2.378 26.294-.262 2.336L64 101.607v.001l-.022.019-28.311-7.888L33.75 72h13.883l.985 11.054 15.386 4.17-.004.008v-.002l15.443-4.229L81.075 65H48.792l-.277-3.043-.631-7.129L47.553 51h34.749l1.264-14H30.64l-.277-3.041-.63-7.131L29.401 23h69.281l-.331 3.862z"></path>
    </svg>
    const gitHubIcon = <svg viewBox="0 0 128 128">
    <g fill={iconColor}><path fillRule="evenodd" clipRule="evenodd" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"></path><path d="M26.484 91.806c-.133.3-.605.39-1.035.185-.44-.196-.685-.605-.543-.906.13-.31.603-.395 1.04-.188.44.197.69.61.537.91zm2.446 2.729c-.287.267-.85.143-1.232-.28-.396-.42-.47-.983-.177-1.254.298-.266.844-.14 1.24.28.394.426.472.984.17 1.255zM31.312 98.012c-.37.258-.976.017-1.35-.52-.37-.538-.37-1.183.01-1.44.373-.258.97-.025 1.35.507.368.545.368 1.19-.01 1.452zm3.261 3.361c-.33.365-1.036.267-1.552-.23-.527-.487-.674-1.18-.343-1.544.336-.366 1.045-.264 1.564.23.527.486.686 1.18.333 1.543zm4.5 1.951c-.147.473-.825.688-1.51.486-.683-.207-1.13-.76-.99-1.238.14-.477.823-.7 1.512-.485.683.206 1.13.756.988 1.237zm4.943.361c.017.498-.563.91-1.28.92-.723.017-1.308-.387-1.315-.877 0-.503.568-.91 1.29-.924.717-.013 1.306.387 1.306.88zm4.598-.782c.086.485-.413.984-1.126 1.117-.7.13-1.35-.172-1.44-.653-.086-.498.422-.997 1.122-1.126.714-.123 1.354.17 1.444.663zm0 0"></path></g>
    </svg>

    const [projectDisplay, setProjectDisplay] = useState(0)

    const projects = [
        {
            name: 'Netflix Clone',
            picture: "project-img1 project-img1-white",
            link: 'https://bernardo-netflix-clone.herokuapp.com/',
            repository: 'https://github.com/BernardoRamalhete/netflixclone',
            description: "A netflix clone web application that has full CRUD functionality using a mongoDB to save user's accounts and their profiles. In the app the user can create multiple profiles, delete then or edit, chaging the profile's name and photo. And when it comes to the netflix browse page, it's created using the TMDB API to dynamically provide the movie list and choose the featured movie.",
            infoTechs: 'Backend/frontend',
            icons: [reactIcon, mongoIcon, javaScriptIcon, htmlIcon, cssIcon]
        },
        {
            name: 'Paola Ramalhete',
            picture: "project-img2 project-img2-white",
            link: 'https://paola-ramalhete.web.app/',
            repository: 'https://github.com/BernardoRamalhete/site-paola-ramalhete',
            description: "Personal single page website made to a brazilian personal stylist. This site was made using react to make the content flow easier and faster, this with a minimalist design and the use of custom fonts make a clean and reactive website. The code is entirelly controled by react hooks, not utilising react-router to go from page to page. This way  the content is dynamically loaded as the user select between the options in the top menu.",
            infoTechs: 'Frontend',
            icons: [reactIcon, javaScriptIcon, htmlIcon, cssIcon]
        }
    ]

    const openProject = (link) => {
        window.open(link)
    }

    const handleRightArrow = () => {
        if(projectDisplay + 1 <= projects.length - 1) {
            setProjectDisplay((prevState) => prevState + 1)
        } else {
            setProjectDisplay(0)
        }

    }

    const handleLeftArrow = () => {
        if(projectDisplay - 1 >= 0) {
            setProjectDisplay((prevState) => prevState - 1)
        } else {
            setProjectDisplay(1)
        }
    }


    const [cellPhone, setCellPhone] = useState(false)
    const [pageWidth, setPageWidth] =useState(window.innerWidth)

    const handleResize = () => {
        setPageWidth(window.innerWidth)
    }
    
    useEffect(()=> {
        if(pageWidth <= 760) {
            setCellPhone(true)
            setIconSize('70px')
        } else {
            setCellPhone(false)
            setIconSize('150px')
        }
        return (window.removeEventListener('resize', handleResize))
    }, [pageWidth])

    window.addEventListener('resize', handleResize)

    useEffect(()=>{
        if(!darkMode) {
          setIconColor('#F0386B9a')
          setArrowColor('#F0386B9a')
          
        } else {
          setIconColor('#F0386b')
        setArrowColor('#EFE9E7')
        }
      },[darkMode])

      

    return (
        <>

                <Menu darkMode={darkMode} menuControl={menuControl} setMenuControl={setMenuControl} />

            <MenuModal thisPage={'Projects'} setDarkMode={setDarkMode} darkMode={darkMode} cellPhone={cellPhone} menuControl={menuControl} setMenuControl={setMenuControl} contactControl={contactControl} setContactControl={setContactControl} />

            <Contact darkMode={darkMode} contactControl={contactControl} setContactControl={setContactControl} />
            <div className={
                (menuControl || contactControl) && darkMode? "ProjectsBody blured" : 
                (menuControl || contactControl) && !darkMode ? "ProjectsBody ProjectsBody-White blured" : 
                !(menuControl || contactControl) && !darkMode ? "ProjectsBody ProjectsBody-White" : 
                !(menuControl || contactControl) && darkMode ? "ProjectsBody" : ''
                }>

                <div className={darkMode?'section-title':'section-title section-title-white'}>
                    <h1>&lt;projects&gt;</h1>
                </div>

                <div className='project-arrows' style={cellPhone ? {zIndex: 1000000} : {}}>

                    <div className={darkMode?'left-arrow':'left-arrow left-arrow-white'} onClick={handleLeftArrow}><ArrowRightIcon sx={{ transform: 'rotate(180deg)', fontSize: iconSize, color: arrowColor }} /></div>
                    <div className={darkMode?'right-arrow':'right-arrow right-arrow-white'} onClick={handleRightArrow}><ArrowRightIcon sx={{ fontSize: iconSize, color: arrowColor }} /></div>
                </div>

                <div className='projects-holder'>



                    <section className='project-container'>

                        <h1 className={darkMode?'project-title':'project-title project-title-white'}>
                            {projects[projectDisplay].name}
                        </h1>

                        

                        <div className='project-body' >
                            <div className='project-hover' onMouseEnter={() => setImgHovered(true)} onMouseLeave={() => setImgHovered(false)} onClick={() => openProject(projects[projectDisplay].link)}>   
                            </div>
                            <a className={projects[projectDisplay].picture} target='blank_' rel='noreferrer' href={projects[projectDisplay].link} >
                                <div className={
                                    cellPhone ?'project-info-cellphone' : 
                                    imgHovered ? 'project-info project-info-hovered' : 'project-info'}>
                                    <h2 className='project-info-title'>{projects[projectDisplay].name}</h2>
                                    <p className='project-info-tech'>{projects[projectDisplay].infoTechs}</p>
                                    <p className='project-info-live'>click to access the live web app</p>
                                </div>
                            </a>
                        

                        </div>

                        <div className={imgHovered && !cellPhone ? 'project-icons-hovered' : 'project-icons'}>

                            {
                                projects[projectDisplay].icons.map((icon, key) => {
                                    
                                    return <div className={darkMode? 'project-icon-item':"project-icon-item project-icon-item-white"} key={key}>
                                        {icon}
                                    </div>
                                })
                            }

                        </div>
                        <p className={darkMode? 'project-description' : 'project-description project-description-white'}>
                            {projects[projectDisplay].description}
                        </p>
                       
                        <a className='project-github' href={projects[projectDisplay].repository} target='_blank' rel='noreferrer'>
                            {gitHubIcon}
                        </a>
                            <p className={darkMode? 'github-sub' : 'github-sub-white'}>Access the project repository</p>
                        

                    </section>

                </div>


            </div>

        </>
    )
}

export default Projects