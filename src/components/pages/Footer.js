import React from 'react'
import ScienceIcon from '@mui/icons-material/Science';
import PsychologyIcon from '@mui/icons-material/Psychology';
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <p>{<ScienceIcon/>} Made with React by Kristen {<PsychologyIcon/>}</p>
        </footer>
    )
}