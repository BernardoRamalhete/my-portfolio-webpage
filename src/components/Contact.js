import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import '../styles/contact.css'
import '../styles/contact-white.css'

function Contact({ contactControl, setContactControl, darkMode }) {

    const FORM_ENDPOINT = 'https://public.herotofu.com/v1/97385820-a641-11ec-975b-f9cc2b0e6900'

    const [submittedForm, setSubmittedForm] = useState(false)

    const handleSubmit = () => {
        setTimeout(() => { setSubmittedForm(true) }, 100);
    }
    return (
        <>
            <div className={contactControl ? 'contact-overlay contactOpen' : 'contact-overlay'} onClick={() => { setContactControl((prevState) => !prevState); setSubmittedForm(false) }}>
            </div>

            <div className={
                contactControl && darkMode ? 'contact-modal contactOpen' : 
                contactControl && !darkMode ? 'contact-modal contact-modal-white contactOpen' : 'contact-modal'
                }>
                <div className='contact-close'>

                    <CloseIcon className={darkMode ? 'contact-close-icon' : 'contact-close-icon contact-close-icon-white'} sx={{ fontSize: '70px', transition: 'all 1s ease' }} onClick={() => { setContactControl(false); setSubmittedForm(false) }} />

                </div>

                {submittedForm ?
                    <div class={darkMode ? 'loader' : "loader loader-white"}>Loading...</div>
                    : <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method='post'>

                        <label htmlFor='email' className='contact-label'>
                            <input type="email" placeholder="Email Address" name='email' className={darkMode ? 'contact-input' : 'contact-input contact-input-white'} />
                        </label>

                        <label htmlFor='name' className='contact-label'>
                            <input type="text" placeholder="Your name" name='name' className={darkMode ? 'contact-input' : 'contact-input contact-input-white'} />
                        </label>

                        <label htmlFor='message' className='contact-label'>
                            <textarea placeholder="Your message..." name='message' className={darkMode ? 'contact-input contact-textarea' : 'contact-input contact-input-white contact-textarea'} />
                        </label>

                        <button type="submit" className={darkMode ? 'contact-btn' : 'contact-btn contact-btn-white'}> Send</button>

                    </form>}

            </div>
        </>
    )
}

export default Contact