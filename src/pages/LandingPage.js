import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import LandingContactUs from '../components/LandingContactUs'
import LandingHowToStart from '../components/LandingHowToStart'
import LandingImmersionSec from '../components/LandingImmersionSec'
import OurNavBar from '../components/OurNavBar'

function landingPage() {
    return (
        <div>
            <OurNavBar/>
            <HeroImage/>
            <LandingImmersionSec/>
            <LandingHowToStart/>
            <LandingContactUs/>
            <Footer/>
        </div>
    )
}

export default landingPage
