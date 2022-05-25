import React from 'react'
import '../style/Main.css'
import Header from './Header'
import Buttons from './Buttons'
import About from './About'
import Footer from './Footer'

export default function Main(){
    return(
        <main>
            <Header />
            <Buttons />
            <About />
            <Footer />
        </main>
    )
}