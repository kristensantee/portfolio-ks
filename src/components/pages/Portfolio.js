import React from 'react'
import Projects from './Projects'
// import curarte from '../../images/curARTe.png'
import outbound from '../../images/outbound.png'
// import staticportfolio from '../../images/staticportfolio.png'
// import weatherapp from '../../images/weatherapp.png'
// import regex from '../../images/regex.png'
// import pwa from '../../images/pwa.png'

const projects = [
    {
    name: 'Outbound Gear Exchange',
    description: 'Outbound Gear Exchange is a marketplace for swapping outdoor gear. Browse gear by category and request gear using nodemailer.',
    img: outbound,
    link: 'https://outbound-gear-exchange.herokuapp.com/',
    github: 'https://github.com/jlee12297/Outbound-Gear-Exchange'
    }
    // {
    // name: 'curARTe',
    // description: 'curARTe description here',
    // id: 2,
    // image: curarte
    // },
    // {
    // name: 'Static Portfolio',
    // description: 'static portfolio description here',
    // id: 3,
    // image: staticportfolio
    // },
    // {
    // name: 'Weather App',
    // description: 'weather app description here',
    // id: 4,
    // image: weatherapp
    // },
    // {
    // name: 'Regex Writeup',
    // description: 'regex description here',
    // id: 5,
    // image: regex
    // },
    // {
    // name: 'PWA',
    // description: 'pwa description here',
    // id: 6,
    // image: pwa
    // },
]

export default function Portfolio() {
    return (
        <div>
            {projects().map((props) => (
                <Projects 
                name={projects.name} 
                description={projects.description} 
                id={projects.id} 
                image={projects.image}/>
            ))}
            
        </div>
    )
}