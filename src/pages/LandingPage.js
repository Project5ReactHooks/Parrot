import React from 'react'
import HeroImage from '../components/HeroImage'
import LandingContactUs from '../components/LandingContactUs'
import LandingHowToStart from '../components/LandingHowToStart'
import LandingImmersionSec from '../components/LandingImmersionSec'

function landingPage() {
    return (
        <div>
            <HeroImage/>
            <LandingImmersionSec/>
            <LandingHowToStart/>
            <LandingContactUs/>
        </div>
    )
}

export default landingPage
