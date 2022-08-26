import React from 'react'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import { BottomNavigation } from '@mui/material'
import { BottomNavigationAction } from '@mui/material'
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import CollectionsIcon from '@mui/icons-material/Collections';
import GradingIcon from '@mui/icons-material/Grading';

function NavBar({ currentPage,handlePageChange }) {
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
                <BottomNavigationAction 
                    label="About Me"
                    component={Link}
                    to='/'
                    icon={<AutoAwesomeIcon />} 
                />
                <BottomNavigationAction 
                    label="Portfolio"
                    component={Link}
                    to='/portfolio' 
                    icon={<CollectionsIcon />} 
                />
                <BottomNavigationAction 
                    label="Resume" 
                    component={Link}
                    to='resume'
                    icon={<GradingIcon />} 
                />
                <BottomNavigationAction 
                    label="Contact" 
                    component={Link}
                    to='contact'
                    icon={<AppShortcutIcon />} 
                />
                </BottomNavigation>
            </Box>
        </div>
    )
}

export default NavBar;