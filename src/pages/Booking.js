import React from 'react'
import '../style/Booking.css'
import BookingCardInfo from '../components/BookingCardInfo'

function Booking() {
    return (
        <div>

            <div className='booking-head'>
                <h1>Online English tutors &amp; teachers for private lessons </h1>
                <p>Looking for an online English tutor? Parrot is the leading online
                    language learning platform worldwide. You can choose from 11798
                    English </p>
                <p>teachers with an average rating of 4.88 out of 5 stars
                    given by 69417 customers.</p>
                <img src='hero.png' />
            </div>
            <BookingCardInfo />
            {/* #bbe9eb */}
        </div>
    )
}

export default Booking
