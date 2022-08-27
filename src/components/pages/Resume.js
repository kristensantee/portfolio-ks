import React from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import ListItemText from '@mui/material/ListItemText'
import FolderIcon from '@mui/icons-material/Folder'
import ScienceIcon from '@mui/icons-material/Science';


export default function Resume() {
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return (
        <Grid direction="row" spacing={2}>
            <div>
                <Button variant="contained" href="https://kristensantee.github.io/professional-portfolio-challenge/assets/Kristen%20Santee%20Resume.pdf" target="_blank">
                Download Resume
                </Button>
            </div>
            
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
            WebDev Skills
          </Typography>
            <List dense={dense}>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      JS
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Javascript"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      CSS
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="HTML/CSS"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      Git
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Git"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      html
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="HTML"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      DOM
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="DOM"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      API
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="APIs"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      JQ
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="JQuery"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Agile Development"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      N
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Node"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      Ex
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Express"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      SQL
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="MySQL"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      M
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="MongoDB/NoSQL"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      MVC
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="MVC Paradigm"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      Seq
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Sequelize"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      PWA
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Progressive Web Apps"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      Re
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="React"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <ScienceIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="MERN Stack"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Computer Science Fundamentals"
                  />
                </ListItem>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar>
                      <FolderIcon />
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary="Project Management"
                  />
                </ListItem>
            </List>
        </Grid>
    )
}