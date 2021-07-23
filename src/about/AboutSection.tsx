import React, { useState } from 'react'
import Gallery from './gallery/Gallery'
import Title from './title/Title'
import container1 from './gallery/img/gallery/container1.svg'
import container2 from './gallery/img/gallery/container2.svg'
import container3 from './gallery/img/gallery/container3.svg'
import container4 from './gallery/img/gallery/container4.svg'
import container5 from './gallery/img/gallery/container5.svg'

const AboutSection = () => {
    const [galleryArray] = useState([container1, container2, container3, container4, container5]) 
    
    
    return (
        <div> 
            <Title/>
            <Gallery image={galleryArray} /> 
        </div>
    )
}

export default AboutSection