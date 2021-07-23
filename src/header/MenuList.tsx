import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import iconMenu from './icon_menu.svg'


interface IMenuList {

}

const StyledMenuList = styled.div`
    display: flex;
    padding: 46px 0 43px 0;
    width: 100%;
`

const StyledMenuText = styled.div`
font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 22px;

color: rgba(54, 56, 56, 0.9033);
`

const StyledMenuLogo = styled.div`

`
const StyledHeaderText = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
`


const MenuList: React.VFC<IMenuList> = () => {
    return (
        <StyledMenuList>
            <StyledHeaderText>
            <StyledMenuText>About</StyledMenuText>
            <StyledMenuText>Gallery</StyledMenuText>
            </StyledHeaderText>
                <StyledMenuLogo>
                    <img src={logo} alt='Logo' />
                </StyledMenuLogo>
            <StyledHeaderText>
            <StyledMenuText>Blog</StyledMenuText>
            <StyledMenuText>Contact</StyledMenuText>
            <div>
                <img src={iconMenu} alt='Path' />
            </div>
            </StyledHeaderText>
        </StyledMenuList>
    )
}

export default MenuList