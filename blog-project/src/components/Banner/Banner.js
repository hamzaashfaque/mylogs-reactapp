import React from 'react'
import { BannerDiv, BannerLogo, BannerText } from './BannerElements'

const Banner = () => {
    return (
        <div>
            <BannerDiv>
                <BannerLogo src="/images/Brown_Phi.png" alt="Phi Symbol" />
                <BannerText>My Logs</BannerText>
            </BannerDiv>
        </div>
    )
}

export default Banner
