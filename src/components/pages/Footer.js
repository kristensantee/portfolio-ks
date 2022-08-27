import React from 'react'
import ScienceIcon from '@mui/icons-material/Science';
import PsychologyIcon from '@mui/icons-material/Psychology';
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import '../styles/Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <p>
                <a href="https://github.com/kristensantee" >
                <GitHubIcon className="icon"/>
                </a>
                {<ScienceIcon/>} Made with React by Kristen {<PsychologyIcon/>}
                <a href="https://www.linkedin.com/in/kristen-santee-aba1a631/">
                <LinkedInIcon className="icon"/>
                </a>
            </p>
        </footer>
    )
}