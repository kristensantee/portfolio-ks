// import * as React from 'react'
// import './styles/NavTabs.css'
// import { Link } from 'react-router-dom'
// import Box from '@mui/material/Box'
// import { BottomNavigation } from '@mui/material'
// import { BottomNavigationAction } from '@mui/material'
// import AppShortcutIcon from '@mui/icons-material/AppShortcut';
// import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
// import CollectionsIcon from '@mui/icons-material/Collections';
// import GradingIcon from '@mui/icons-material/Grading';

// function NavTabs({ currentPage,handlePageChange }) {
//     const [value, setValue] = React.useState(0);

//     return (
//         <div>
//             <Box sx={{ width: 500 }}>
//                 <BottomNavigation
//                     showLabels
//                     value={value}
//                     onChange={(event, newValue) => {
//                         setValue(newValue);
//                     }}
//                     >
//                 <BottomNavigationAction 
//                     label="About Me" 
//                     component={Link}
//                     to='/about'
//                     icon={<AutoAwesomeIcon />} 
//                 />
//                 <BottomNavigationAction 
//                     label="Portfolio"
//                     component={Link}
//                     to='/portfolio' 
//                     icon={<CollectionsIcon />} 
//                 />
//                 <BottomNavigationAction 
//                     label="Resume" 
//                     component={Link}
//                     to='resume'
//                     icon={<GradingIcon />} 
//                 />
//                 <BottomNavigationAction 
//                     label="Contact" 
//                     component={Link}
//                     to='contact'
//                     icon={<AppShortcutIcon />} 
//                 />
//                 </BottomNavigation>
//             </Box>
//                 <ul className='nav nav-tabs'>
//                     <li className='nav-item'>
//                         <a
//                             href='#about'
//                             onClick={() => handlePageChange('About')}
//                             className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//                             >
//                             About
//                         </a>
//                     </li>
//                     <li className='nav-item'>
//                         <a
//                             href='#contact'
//                             onClick={() => handlePageChange('Contact')}
//                             className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//                             >
//                             Contact
//                         </a>
//                     </li>
//                     <li className='nav-item'>
//                         <a
//                             href='#portfolio'
//                             onClick={() => handlePageChange('Portfolio')}
//                             className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//                             >
//                             Portfolio
//                         </a>
//                     </li>
//                     <li className='nav-item'>
//                         <a
//                             href='#resume'
//                             onClick={() => handlePageChange('Resume')}
//                             className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//                             >
//                             Resume
//                         </a>
//                     </li>
//                 </ul>
//         </div>
//     )
// }

// export default NavTabs;