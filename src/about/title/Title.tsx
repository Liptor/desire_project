import React from 'react'
import title from './title.svg'
import styled from 'styled-components'

const StyledTitle = styled.div`

`

const Title = () => {
    return (
        <StyledTitle>
            <img src={title} alt='Title' />
        </StyledTitle>
    )
}

export default Title