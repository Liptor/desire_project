import React from 'react'
import styled from 'styled-components' 
import mainSlider from './slider/main_slider.svg'
import sliderImage from './slider/chair.svg'
import slogan from './slider/slogan.svg'

const StyledSlider = styled.div`
    display: flex;
    background-image: url(${mainSlider});
`

const StyledImage = styled.div`
`

const StyledSlogan = styled.div`
    margin-top: 150px;
`

interface ISlider {

}

const Slider: React.VFC<ISlider> = (): JSX.Element => {
    return (
        <StyledSlider>
            <StyledImage>
                <img src={sliderImage} alt='Chair' />
            </StyledImage>
           <StyledSlogan>
                 <img src={slogan} alt='Slogan' />
           </StyledSlogan> 
        </StyledSlider>
    )
}

export default Slider