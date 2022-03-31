import '../styles/select-cv.css'
function SelectCV({darkMode, cvOpen, setCvOpen}) {
  return (
    <>
    <div className='cv-overlay' onClick={()=> {setCvOpen(false)}} style={cvOpen ? {} : {display: 'none'}}/>
    
    <div className={darkMode ? 'cv-container' : 'cv-container container-white'} style={cvOpen ? {} : {display: 'none'}}>
        <h2>What language do you prefer it in?</h2>
        <div className='cv-buttons'>
            <a href='https://drive.google.com/file/d/1bT4L65UbRsjm-23r9iaosWaHVRaId9S5/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                <button>Português</button>
            </a>
            <a href='https://drive.google.com/file/d/1w9wvZhwobOwuOADHfQFVP0pfmsoXFrHk/view?usp=sharing' target='_blank' rel='noopener  noreferrer'>
                <button>English</button>
            </a>
        </div>
    </div>
    
    </>
  )
}
export default SelectCV