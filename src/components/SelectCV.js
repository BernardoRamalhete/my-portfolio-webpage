import '../styles/select-cv.css'
function SelectCV({darkMode, cvOpen, setCvOpen}) {
  return (
    <>
    <div className='cv-overlay' onClick={()=> {setCvOpen(false)}} style={cvOpen ? {} : {display: 'none'}}/>
    
    <div className={darkMode ? 'cv-container' : 'cv-container container-white'} style={cvOpen ? {} : {display: 'none'}}>
        <h2>What language do you prefer it in?</h2>
        <div className='cv-buttons'>
            <a href='https://drive.google.com/file/d/1-K38EfwxECBIqICtRLvpMoQq3-UqxT9E/view?usp=sharing' target='_blank' rel='noopener noreferrer'>
                <button>Português</button>
            </a>
            <a href='https://drive.google.com/file/d/13CZgwnmzIuwhoXXtJjLCArjhKdvExVmC/view?usp=sharing' target='_blank' rel='noopener  noreferrer'>
                <button>English</button>
            </a>
        </div>
    </div>
    
    </>
  )
}
export default SelectCV