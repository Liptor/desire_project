import React from 'react'
import styled from 'styled-components'
import MenuList from './MenuList'

interface IMenuSection {

}

const StyledMenuSection = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const MenuSection: React.VFC<IMenuSection> = (): JSX.Element => {
    return (
        <StyledMenuSection>
            <MenuList />    
        </StyledMenuSection>
    )
}

export default MenuSection