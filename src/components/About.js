import React from 'react'
import '../style/About.css'
export default function About(){
    return(
        <section className='about-section--container'>
            <div className='about--container about--container--first'>
                <h3 className='about-title'>About</h3>
                <p className='about-text'> I consider myself a committed, efficient, and responsible person. I’m interested in pursuing a position, which combines front-end development, code, creativity, and web design into digital experiences.</p>
            </div>
            <div className='about--container'>
                <h3 className='about-title'>Interests</h3>
                <p className='about-text'>Web developer with a passion for this craft, problem-solving, continuous learning, and a huge fan of JavaScript frontend frameworks.</p>
            </div>
        </section>
    )
}