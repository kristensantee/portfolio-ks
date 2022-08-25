import * as React from 'react'
import './styles/NavTabs.css'
import Box from '@mui/icons-material/Box'
import { BottomNavigation } from '@mui/material'
import BottomNavigationAction from '@mui/material'
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CollectionsIcon from '@mui/icons-material/Collections';
import ContactMailIcon from '@mui/icons-material/ContactMail';

function SimpleBottomNavigation({ currentPage,handlePageChange }) {
    const [value, setValue] = React.useState(0);

    return (
        <div>
            <Box sx={{ width: 500 }}>


            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                >
            <BottomNavigationAction label="Contact" icon={<AppShortcutIcon />} />
            <BottomNavigationAction label="About Me" icon={<AutoAwesomeIcon />} />
            <BottomNavigationAction label="Portfolio" icon={<CollectionsIcon />} />
            <BottomNavigationAction label="Portfolio" icon={<ContactMailIcon />} />
            </BottomNavigation>

            <ul className='nav nav-tabs'>
                <li className='nav-item'>
                    <a
                        href='#about'
                        onClick={() => handlePageChange('About')}
                        className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
                        >
                        About
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                        href='#contact'
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                        Contact
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                        href='#portfolio'
                        onClick={() => handlePageChange('Portfolio')}
                        className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                        >
                        Portfolio
                    </a>
                </li>
                <li className='nav-item'>
                    <a
                        href='#resume'
                        onClick={() => handlePageChange('Resume')}
                        className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                        >
                        Resume
                    </a>
                </li>
            </ul>
            </Box>
        </div>
    )
}

export default SimpleBottomNavigation;