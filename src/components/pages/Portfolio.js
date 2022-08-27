import React from 'react'
import Projects from './Projects'
import curarte from '../../images/curARTe.png'
import outbound from '../../images/outbound.png'
import staticportfolio from '../../images/staticportfolio.png'
import weatherapp from '../../images/weatherapp.png'
import regex from '../../images/regex.png'
import pwa from '../../images/pwa.png'

const projects = [
    {
    name: 'Outbound Gear Exchange',
    description: 'oge description here',
    id: 1,
    image: outbound
    },
    {
    name: 'curARTe',
    description: 'curARTe description here',
    id: 2,
    image: curarte
    },
    {
    name: 'Static Portfolio',
    description: 'static portfolio description here',
    id: 3,
    image: staticportfolio
    },
    {
    name: 'Weather App',
    description: 'weather app description here',
    id: 4,
    image: weatherapp
    },
    {
    name: 'Regex Writeup',
    description: 'regex description here',
    id: 5,
    image: regex
    },
    {
    name: 'PWA',
    description: 'pwa description here',
    id: 6,
    image: pwa
    },
]

export default function Portfolio() {
    return (
        <div>
            <Projects name={projects.name[0]} description={projects.description[0]} id={projects.id[0]} image={projects.image[0]}/>
            <Projects name={projects.name[1]} description={projects.description[1]} id={projects.id[1]}image={projects.image[1]}/>

        </div>
    )
}