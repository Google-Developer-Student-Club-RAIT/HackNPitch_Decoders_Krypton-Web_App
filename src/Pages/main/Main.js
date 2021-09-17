import React from 'react'
import { Nav } from '../../Components/Navbar'
import { Content } from '../../Components/Content';
import { Service } from '../../Components/Service';
import {About} from '../../Components/About';
import { Contact } from '../../Components/Contact';
import { Footer } from '../../Components/Footer';

function Main() {
    return (
        <div>
            <Nav />
            <Content />
            <Service />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default Main
