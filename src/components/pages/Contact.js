import React from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';



export default function Contact() {
    return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <div className="container">
        <h1>Let's connect!</h1>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="mailto:kristen.l.santee@gmail.com" target="_blank">
              <ListItemIcon>
                <MarkEmailReadIcon />
              </ListItemIcon>
              <ListItemText primary="Email" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://github.com/kristensantee" target="_blank">
              <ListItemIcon>
                <GitHubIcon />
              </ListItemIcon>
              <ListItemText primary="Github" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="https://www.linkedin.com/in/kristen-santee-aba1a631/" target="_blank">
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText primary="LinkedIn" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
      </div>
      {/* <nav aria-label="secondary mailbox folders">
        <List>
        <ListItem disablePadding>
        <ListItemButton>
        <ListItemText primary="Trash" />
        </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
        <ListItemButton component="a" href="#simple-list">
        <ListItemText primary="Spam" />
        </ListItemButton>
        </ListItem>
        </List>
      </nav> */}
    </Box>
    )
}