import CloseIcon from '@mui/icons-material/Close'
import { useState } from 'react'
import '../styles/contact.css'

function Contact({ contactControl, setContactControl }) {

    const FORM_ENDPOINT = 'https://public.herotofu.com/v1/97385820-a641-11ec-975b-f9cc2b0e6900'

    const [submittedForm, setSubmittedForm] = useState(false)

    const handleSubmit = () => {
        setTimeout(() => { setSubmittedForm(true) }, 100);
    }
    return (
        <>
            <div className={contactControl ? 'contact-overlay contactOpen' : 'contact-overlay'} onClick={() => { setContactControl((prevState) => !prevState); setSubmittedForm(false) }}>
            </div>

            <div className={contactControl ? 'contact-modal contactOpen' : 'contact-modal'}>
                <div className='contact-close'>

                    <CloseIcon className='contact-close-icon' sx={{ fontSize: '70px', transition: 'all 1s ease' }} onClick={() => { setContactControl(false); setSubmittedForm(false) }} />

                </div>

                {submittedForm ?
                    <div class="loader">Loading...</div>
                    : <form action={FORM_ENDPOINT} onSubmit={handleSubmit} method='post'>

                        <label htmlFor='email' className='contact-label'>
                            <input type="email" placeholder="Email Address" name='email' className='contact-input' />
                        </label>

                        <label htmlFor='name' className='contact-label'>
                            <input type="text" placeholder="Your name" name='name' className='contact-input' />
                        </label>

                        <label htmlFor='message' className='contact-label'>
                            <textarea placeholder="Your message..." name='message' className='contact-input contact-textarea' />
                        </label>

                        <button type="submit" className='contact-btn'> Send</button>

                    </form>}

            </div>
        </>
    )
}

export default Contact