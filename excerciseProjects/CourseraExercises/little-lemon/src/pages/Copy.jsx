
import logoImage from '../images/littleLemonLogo.png';
import ArrowCircleLeftRoundedIcon from '@mui/icons-material/ArrowCircleLeftRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import mainImg from '../images/img2.jpg';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import Number from '../compnents/Number';
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, MenuItem, Select } from '@mui/material';
import BookingForm from '../compnents/BookingForm';


export default function Copy() {

    const [formData, setFormData] = useState({
        date: dayjs('2023-11-30'),
        time: dayjs('2023-11-30T19:00'),
        guests: '1',
        occasion: 'Birthday',
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleTimeChange = (time) => {
        setFormData({
            ...formData,
            time,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = {};

        if (!formData.date) {
            validationErrors.date = 'Date is required';
        }

        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
        } else {
            setErrors(validationErrors);
        }
    };



    return (
        <div className='booking'>
            <div className="bookingPage">
                <header className='headerOfBookingPg'>
                    <div className="my-component">
                        <ArrowCircleLeftRoundedIcon style={{ fontSize: '32px', color: '#495E57', marginLeft: "10px" }} />
                    </div>

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
                    {/* <div className='userInputInMainBookingPg'> */}

                    {/* <div className='addGuests'>
                            <h3>Guests</h3>
                            <div className="addOrRemove" >
                                <RemoveCircleIcon />
                                <div>4</div>
                                <AddCircleIcon />
                            </div>
                        </div>

                        <div className='selectDate'>
                            <h3>Select Date</h3>
                            <LocalizationProvider dateAdapter={AdapterDayjs}  >
                                <DatePicker />
                            </LocalizationProvider>
                        </div>

                        <div className='selectTime'>
                            <h3>Select Time</h3>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <TimePicker defaultValue={dayjs('2022-04-17T15:30')} />
                            </LocalizationProvider>
                        </div>

                        <div className='selectTable'>
                            <h3>Select Table Number</h3>
                            <div className='tableNo'>
                                <Number />  <Number />  <Number />  <Number />  <Number />  <Number /> <Number />  <Number />  <Number />  <Number />  <Number />  <Number /> <Number />  <Number />  <Number />
                            </div>
                        </div> */}
                    <BookingForm />
                    {/* </div> */}
                </main>




                {/* <footer className='footerOfBookingPg'>
                    <button className='reserveTableBtn'>Reserve a Table</button>
                </footer> */}
            </div>
        </div>

    )
}