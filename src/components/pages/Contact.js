import React, {useState} from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import TextField from '@mui/joy/TextField'
import Divider from '@mui/material/Divider'
import Button from '@mui/joy/Button'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { validateEmail } from '../../utils/helpers'

export default function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefauit();
        if (!validateEmail(email) || !name) {
            setErrorMessage('Email or name not valid. Please provide a valid email address and name.');
        return;
        }
        alert(`Thanks for the message, ${name}`)
        setEmail('');
        setName('');
        setEmail('');
    };

    return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <div>
            <h1>Let's connect!</h1>
            <nav aria-label="main mailbox folders">
                <List>
                <ListItem disablePadding>
                    <ListItemButton component='a' href="https://github.com/kristensantee" target="_blank">
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary='Github' />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component='a' href="https://www.linkedin.com/in/kristen-santee-aba1a631/" target="_blank">
                    <ListItemIcon>
                        <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText primary='LinkedIn' />
                    </ListItemButton>
                </ListItem>
                <Divider />
                    <h3>Contact Kristen</h3>
                        <form className='form'>
                            <TextField
                                value={name}
                                label='name'
                                name='name'
                                onChange={handleInputChange}
                                type='name'
                                placeholder='name'
                                size='md'
                                variant='outlined'
                                color='primary'
                                required
                                />
                            <TextField
                                value={email}
                                label='email'
                                name='email'
                                onChange={handleInputChange}
                                type='email'
                                placeholder='email'
                                size='md'
                                variant='outlined'
                                required
                                />
                            <TextField
                                value={message}
                                label='message'
                                name='message'
                                onChange={handleInputChange}
                                type='text'
                                placeholder='write your message here'
                                size='md'
                                variant='outlined'
                                required
                                />
                            <Button type='button' variant='outlined' endIcon={<KeyboardArrowRight/>} color='primary' onClick={handleFormSubmit}>Submit</Button>
                        </form>
                        {errorMessage && (
                            <div>
                                <p className='error-text'>{errorMessage}</p>
                            </div>
                        )}  
                </List>
            </nav>
      </div>
    </Box>
    )
}