import React from 'react'
import '../style/Buttons.css'
import emailLogo from '../images/email.png'
import linkedIn from '../images/linkedin.png'

export default function Buttons(){
    return(
        <section className='buttons--container'>
            <a href='mailto:d.cordovaratti@gmail.com' target="_blank" rel="noopener noreferrer">
                <button className='contact-button email-button' type='button'>
                    <img src={emailLogo} className='button-logo' alt='email-logo'/>
                    <span className='contact-button--text email-button--text'>Email</span>
                </button>
            </a>
            <a href='https://www.linkedin.com/in/diego-cordova-ratti/' target="_blank" rel="noopener noreferrer">
                <button className='contact-button linkedin-button' type='button'>
                    <img src={linkedIn} className='button-logo' alt='linkedin-logo'/>
                    <span className='contact-button--text linkedin-button--text'>LinkedIn</span>
                </button>
            </a>
        </section>
    )
}