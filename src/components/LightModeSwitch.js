import '../styles/lightmodeswitch.css'

function LightModeSwitch({handleSwitch, darkMode}) {



    return (
        <>
            <div className='center-switch'>
                <div className={darkMode ? 'switch-container switch-container-dark' : 'switch-container'}>
                    <p className={darkMode ? 'switch-title switch-title-dark' : 'switch-title'}>Dark mode</p>
                    <label className="switch">
                        <input className={darkMode ? 'switch-input switch-input-dark':'switch-input'} type="checkbox" defaultChecked={darkMode? true : false} onChange={handleSwitch}/>
                        <div className={darkMode ? "slider slider-dark" : "slider"}></div>
                    </label>
                </div>
            </div>
        </>
    )
}

export default LightModeSwitch