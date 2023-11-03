import logo from './logo.svg';
import './App.css';
import Container from './compnents/Container';
import BookingForm from './compnents/BookingForm';
import HomePage from './pages/HomePage';
import BookingPage from './pages/BookingPage';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/booking" element={<BookingPage />} />
    //   </Routes>
    // </Router>
   
    <div className='app'>
    {/* <HomePage/> */}
    <BookingPage/>
    </div>
  );
}

export default App;
