import logoImage from '../images/littleLemonLogo.png';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import mainImg from '../images/img2.jpg';
import React from 'react';
import BookingForm from '../compnents/BookingForm';
import { Link } from 'react-router-dom';


export default function BookingPage() {

    return (
        <div className='booking'>
            <div className="bookingPage">
                <header className='headerOfBookingPg'>
                    <Link to="/">
                        <div className="my-component">
                            <ArrowCircleLeftRoundedIcon style={{ fontSize: '32px', color: '#495E57', marginLeft: "10px" }} />
                        </div>
                    </Link>

                    <div className='logoImgOfBookingPg'>
                        <img src={logoImage} alt="Little Lemon Logo" />
                    </div>

                    <div className='iconBtns' style={{ marginLeft: 'auto' }}>
                        <AddShoppingCartRoundedIcon style={{ fontSize: '32px', color: '#495E57', marginRight: '20px' }} />
                        <MenuRoundedIcon style={{ fontSize: '32px', color: '#495E57', marginRight: '10px' }} />
                    </div>

                </header>

                <main className='mainBookingPg'>
                    <div className='mainPhoto'>
                        <img src={mainImg} alt="Pizza photo" />
                    </div>
                    <h2 className='h2Text'>Online Reservation</h2>
                    <BookingForm />
                </main>
            </div>
        </div>

    )
}