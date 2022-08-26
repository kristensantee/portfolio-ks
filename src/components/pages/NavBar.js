import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import { BottomNavigation } from '@mui/material'
import { BottomNavigationAction } from '@mui/material'
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CollectionsIcon from '@mui/icons-material/Collections';
import GradingIcon from '@mui/icons-material/Grading';
import '../styles/NavBar.css'

const accentBrown = '#7e6c6c'

function NavBar() {
    const [value, setValue] = React.useState(0);
    return (
        <div>
            <Box sx={{ width: 500 }} class="navbar" style={{backgroundColor: '#b9e6ff', color: '#7e6c6c'}}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    >
                <BottomNavigationAction 
                    label="About Me"
                    component={Link}
                    to='/'
                    icon={<AutoAwesomeIcon style={{fill: accentBrown}}/>} 
                />
                <BottomNavigationAction 
                    label="Portfolio"
                    component={Link}
                    to='/portfolio' 
                    icon={<CollectionsIcon style={{fill: accentBrown}}/>} 
                />
                <BottomNavigationAction 
                    label="Resume" 
                    component={Link}
                    to='resume'
                    icon={<GradingIcon style={{fill: accentBrown}}/>} 
                />
                <BottomNavigationAction 
                    label="Contact" 
                    component={Link}
                    to='contact'
                    icon={<AppShortcutIcon style={{fill: accentBrown}}/>} 
                />
                </BottomNavigation>
            </Box>
        </div>
    )
}

export default NavBar;