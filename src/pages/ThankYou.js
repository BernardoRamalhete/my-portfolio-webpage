import '../styles/thankyou.css'
import CheckIcon from '@mui/icons-material/Check'
import {Link} from 'react-router-dom'

function ThankYou() {
  return (
      <div className='ThankYouBody'>
        <CheckIcon sx={{fontSize: '300px;'}} className='thanks-icon'/>
        <h1 className='thanks-h1'>Thanks for reaching out!</h1>
        <h2 className='thanks-h2'>I'll get back to you as soon as possible</h2>
        <Link to='/' className='link-to'>
            <button className='thanks-btn'>Back to Home Page</button>
        </Link>
    </div>
  )
}

export default ThankYou