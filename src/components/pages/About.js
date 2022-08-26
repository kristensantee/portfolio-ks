import React from 'react'
import '../styles/About.css'
import Avatar from '@mui/material/Avatar'
import avatar from '../../images/avatar.jpg'

export default function About() {
    return (
        <div className="">
            <Avatar alt='Kristen Santee' src={avatar} sx={{ width:100, height:100 }}/>
            <div className="containerAbout">
                <h1 className="h1">About Me</h1>
                <p className="pBody">
                    My journey to web development has been an odyssey through jobs and locations around the world. After majoring in both History and Classics with a minor in Anthropology, I worked in a museum, helped grow a mortgage company, labored on an archaelogical excavation in Italy, managed the front office of an aesthetic surgery clinic, served as a barista in a coffee shop, tried my hand in real estate, and most recently wrapped a tenure with a large credit union. At first glance, these are widely varied fields and jobs. However, the uniting theme for each of these positions was the need for well-organized data and functional web tools to get the job done well.

                    Before undertaking this journey, I had dabbled in small corners of the developer world without fully understanding the power that could be harnessed with a broader education. Through the completion of full-stack bootcamp, I have become a talented developer with an understanding of how those skills can be applied in a functional workplace environment. This experience has not been an easy one thus far, but it has been rewarding in that I am able to push the limits of my abilities to new heights.  
                </p>
            </div>
        </div>
    )
}