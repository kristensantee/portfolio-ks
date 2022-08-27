import React, {useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/joy/TextField'
import Button from '@mui/joy/Button'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import { validateEmail,checkName } from '../../utils/helpers'
import '../styles/Contact.css'

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
        if (!validateEmail(email)) {
            setErrorMessage('Email not valid. Please provide a valid email address.');
        return;
        }
        if (!checkName(name)) {
            setErrorMessage('Please provide a name.')
        }
        alert(`Thanks for the message, ${name}`)
        setEmail('');
        setName('');
        setEmail('');
    };

    return (
    <Box sx={{ width: '80%'}} className='formContainer'>
        <h1>Let's connect!</h1>
        <form >
        <h3>Contact Kristen</h3>
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
                className='textField'
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
                className='textField'
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
                className='textField'
                id='message'
            />
            <Button type='button' variant='outlined' className="button" endIcon={<KeyboardArrowRight/>} color='primary' onClick={handleFormSubmit} >Submit</Button>
        </form>
        {errorMessage && (
            <div>
                <p className='error-text'>{errorMessage}</p>
            </div>
        )}
    </Box>
    )
}