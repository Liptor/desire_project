import React from 'react'
import styled from 'styled-components'

const StyledGallery = styled.div`
    display: flex;
    justify-content: space-between;
`

interface IGallery { 
    image: any[]
}

const Gallery: React.VFC<IGallery> = ({image}) => {
return (
    <StyledGallery>
        {image.map((i, index) => <img key={index} src={i} alt={i} />)}
    </StyledGallery>
)
}

export default Gallery