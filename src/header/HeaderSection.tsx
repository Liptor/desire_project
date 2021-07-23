import React from 'react'
import CarouselSection from '../carousel/CarouselSection'
import MenuSection from './MenuSection'

interface IHeaderSection {

}

const HeaderSection: React.VFC<IHeaderSection> = (): JSX.Element => {
    return (
        <div>
          <MenuSection />  
          <CarouselSection />
        </div>
    )
}

export default HeaderSection