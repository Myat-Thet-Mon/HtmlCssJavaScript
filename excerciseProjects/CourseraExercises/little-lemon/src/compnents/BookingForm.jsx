import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { DatePicker, TimePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';
import { Button, MenuItem, Select } from '@mui/material';

export default function BookingForm() {
    const [formData, setFormData] = useState({
        date:  dayjs('2023-11-30'),
        time: dayjs('2023-11-30T19:00'),
        guests: '1',
        occasion: 'Birthday',
    });
    const [errors, setErrors] = useState({});


    const handleInputChange = (event) => {
        if (event.target) {
            const { name, value } = event.target;
            setFormData({
                ...formData,
                [name]: value,
            });
        }
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
        } else if (!formData.time) {

        }

        if (Object.keys(validationErrors).length === 0) {
            console.log('Form submitted:', formData);
        } else {
            setErrors(validationErrors);
        }
    };

    return (
        <form className="form"
            onSubmit={handleSubmit}>

            <div className='selectDateForm'>
                <label style={{ color: "#495E57", fontWeight: "600", fontSize: "large" }}>Select Date</label>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        value={formData.date}
                        onChange={handleInputChange}
                    />

                </LocalizationProvider>
            </div>


            <div className='selectTimeForm'>
                <label htmlFor="time" style={{ color: "#495E57", fontWeight: "600", fontSize: "large" }}>Select Time</label>
                <LocalizationProvider dateAdapter={AdapterDayjs} id="time">
                    <TimePicker
                        value={formData.time}
                        onChange={handleTimeChange}
                    />
                </LocalizationProvider>
            </div>

            <div className='selectTimeForm'>
                <label htmlFor="guests" style={{ color: "#495E57", fontWeight: "600", fontSize: "large" }}>Number of guests</label>
                <TextField
                    type="number"
                    placeholder="1"
                    inputProps={{ min: 1, max: 10 }}
                    id="guests"
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                />
            </div>

            <div className='selectOccasionForm'>
                <label htmlFor="occasion" style={{ color: "#495E57", fontWeight: "600", fontSize: "large" }}>Occasion</label>
                <Select
                    id="occasion"
                    name="occasion"
                    value={formData.occasion}
                    onChange={handleInputChange}
                >
                    <MenuItem value="Birthday">Birthday</MenuItem>
                    <MenuItem value="Anniversary">Anniversary</MenuItem>
                </Select>
                {/* {errors.occasion && <div className="error">{errors.occasion}</div>} */}
            </div>

            <div className='centerSubmitBtn'>
                {errors.date  &&<div className="error">{errors.date}</div>}

                <Button type="submit" variant="contained" color="primary" sx={{ backgroundColor: "#F4CE14", textTransform: "none", borderRadius: "5px", color: "#495E57" }}>
                    Reserve a Table
                </Button>
            </div>



        </form>

    );
}
