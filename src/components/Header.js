import React from 'react'
import '../style/Header.css'
import profilePicture from '../images/1652892395333.jpg'


export default function Header(){
    return(
        <header>
            <img src={profilePicture} className="header-picture" alt='my-photograph' />
            <h1 className='header-title'>Diego Córdova</h1>
            <h4 className='header-subtitle'>Frontend Developer</h4>
            <a className='header-link' href='https://github.com/DiegoCordovaRatti'>https://github.com/DiegoCordovaRatti</a>
        </header>
    )
}