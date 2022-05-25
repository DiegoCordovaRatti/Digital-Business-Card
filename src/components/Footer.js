import React from "react";
import facebook from '../images/facebook.png'
import instagram from '../images/instagram.png'
import github from '../images/github.png'
import '../style/Footer.css'

export default function Footer(){
    return(
        <footer>
            <a href="https://www.facebook.com/crocova" className='social-media--link' target="_blank" rel="noopener noreferrer"><img src={facebook} className='facebook-logo social-media--logo' alt='facebook'/></a>
            <a href="https://www.instagram.com/jacobo_ravioli/" className='social-media--link'  target="_blank" rel="noopener noreferrer"><img src={instagram} className='instagram-logo social-media--logo' alt='instagram'/></a>
            <a href="https://github.com/DiegoCordovaRatti" className='social-media--link' target="_blank" rel="noopener noreferrer"><img src={github} className='github-logo social-media--logo' alt='github'/></a>
        </footer>
    )
}