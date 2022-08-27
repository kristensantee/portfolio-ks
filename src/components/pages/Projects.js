import React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export default function Projects(props) {
    const cardStyle = {
        width: '20rem'
    }

    return (
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="outbound gear exchange screenshot"
        height="140"
        image={props.image}
        style={cardStyle}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Project Name: {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          About this project: {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <a href={props.link}>
            <Button size="small">Deployed Site</Button>
        </a>
        <a href={props.github}>
            <Button size="small">Github Development</Button>
        </a>
      </CardActions>
    </Card>
    )

};

