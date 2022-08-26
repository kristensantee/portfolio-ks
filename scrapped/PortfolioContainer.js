// import React, { useState } from 'react'
// import NavTabs from './NavTabs'
// import About from '../src/components/pages/About'
// import Contact from '../src/components/pages/Contact'
// import Portfolio from '../src/components/pages/Portfolio'
// import Resume from '../src/components/pages/Resume'

// export default function PortfolioContainer() {
//     const [currentPage, setCurrentPage] = useState('About');

//     const renderPage = () => {
//         if (currentPage === 'About') {
//             return <About/>;
//         }
//         if (currentPage === 'Contact') {
//             return <Contact/>;
//         }
//         if (currentPage === 'Portfolio') {
//             return <Portfolio/>;
//         }
//         if (currentPage === 'Resume') {
//             return <Resume/>;
//         }
//     };

//     const handlePageChange = (page) => setCurrentPage(page);

//     return (
//         <div>
//             <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
//             {renderPage()}
//         </div>
//     )
// }