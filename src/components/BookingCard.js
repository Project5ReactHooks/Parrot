import React from 'react';
import Pick from './PickDate';
function BookingCard(props) {
    const { tutorImg, tutorName, tutorExp, tutorDes, tutorPrice } = props.item;
    const bookingPush = [];
    // useEffect(() => {
    //         if (!localStorage.getItem('bookingDetails')) {
    //             break;
    //             // localStorage.setItem('bookingDetails', JSON.stringify(this.userDataArr));
    //         }
    //         else {
    //             let storage = JSON.parse(localStorage.getItem("bookingDetails"));
    //             storage.push();
    //             localStorage.setItem("user", JSON.stringify(storage));
    //         }
    //     }, [tutorName]);
    return (
        <div className='Booking-Card'>
            <div className='booking-card'>
                <div className='booking-img'><img src={tutorImg} alt='femail-tutor' /></div>
                <div className='booking-tutor-desc'>
                    <h4>{tutorName}</h4>
                    <p>{tutorExp} years of experience</p>
                    <p>{tutorDes}</p></div>

                <div className='booking-price'>
                    <h3>${tutorPrice}</h3>
                    <p>per hour</p>
                    <Pick tutorName={tutorName} tutorPrice={tutorPrice} />
                </div>

            </div>
        </div>
    )
}

export default BookingCard
