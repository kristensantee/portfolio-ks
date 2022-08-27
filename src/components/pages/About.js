import React from 'react'
import '../styles/About.css'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Avatar from '@mui/material/Avatar'
import avatar from '../../images/avatar.jpg'

export default function About() {
    return (
    <div className="accordionBody">
        <Avatar alt='Kristen Santee' src={avatar} sx={{ width:50, height:50 }}/>
      <Accordion defaultActiveKey='1' className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Professional Goals</Typography>
        </AccordionSummary>
        <AccordionDetails className='typography'>
            <Typography >
            My journey to web development has been an odyssey through jobs and locations around the world. After majoring in both History and Classics with a minor in Anthropology, I worked in a museum, helped grow a mortgage company, labored on an archaelogical excavation in Italy, managed the front office of an aesthetic surgery clinic, served as a barista in a coffee shop, tried my hand in real estate, and most recently wrapped a tenure with a large credit union. At first glance, these are widely varied fields and jobs. However, the uniting theme for each of these positions was the need for well-organized data and functional web tools to get the job done well.
            <div/><div/>
            Before undertaking this journey, I had dabbled in small corners of the developer world without fully understanding the power that could be harnessed with a broader education. Through the completion of full-stack bootcamp, I have become a talented developer with an understanding of how those skills can be applied in a functional workplace environment. This experience has not been an easy one thus far, but it has been rewarding in that I am able to push the limits of my abilities to new heights.  
            <div/><div/>
            I am looking for a position as a full-stack developer with the option to move into product management or project management. I would like to build more experience with the technical aspects before moving into a management position because I believe there is a lot of value in learning the job before managing others through that path.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>How I Work</Typography>
        </AccordionSummary>
        <AccordionDetails className='typography'>
          <Typography>
            I love to work as part of a team. Building success as a unit brings me great joy and I find that it energizes me to produce better work knowing that my teammates are relying on me for solid work product but I can also lean on my team for support or to get unstuck. I also work well independently but it helps to have a constructive task list so I have something to work from. I think that being a good partner or teammate is essential to a positive working environment and I strive to be the kind of teammate that I want to have. 
            <br/>
            <br/>
            I have strong written communication and I prefer to remain as organized as possible while remaining agile for any hiccups along the way. When creating a project to build or manage, I know that readiness is key to a smooth process; I would rather be proactive than reactive by anticipating the needs of the project and having solutions ready. 
            <br/>
            <br/>
            I have a lot of work experience in environments that are fast-paced and stressful where I have needed to remain calm and productive in a customer-facing position. I can re-prioritize tasks as needed to facilitate a smooth day while still getting the work done on time. 
            <br/>
            <br/>
            I believe in working hard and I have high standards for the work that has my name on it. Throughout my full-stack bootcamp experience, I maintained an A-average in spite of the course being pass/fail. I consider myself to be a very capable person who enjoys learning new things to improve both the quality of my life and the quality of my work. 
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className='accordion'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>More About Me</Typography>
        </AccordionSummary>
        <AccordionDetails className='typography'>
            <Typography>
                I live in the Tacoma area of the Pacific Northwest, though I'm originally from West Michigan. I grew up in a log cabin on a dirt road and came through with a childhood that provided me with the skills of resourcefulness and imagination.
                <br/><br/> 
                I have a spouse and two young children who provide me with joy and laughter every day. As a family, we enjoy being outdoors and going on adventures. We like to eat at restaurants and travel and spend time together in general. As an individual, I love to read and listen to podcasts while I am doing something with my hands - sometimes it's cleaning or yardwork but sometimes it's more pleasurable work like bookbinding or crafting in general.
                <br/><br/> 
                I care deeply about social justice issues and the environment.
            </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
    )
}