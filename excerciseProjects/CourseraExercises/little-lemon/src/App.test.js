// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";
import BookingForm from "./compnents/BookingForm";

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);

  const dateLabel = screen.getByText("Select Date");
  const timeLabel = screen.getByText("Select Time");
  const guestsLabel = screen.getByText("Number of guests");
  const occasionLabel = screen.getByText("Occasion");
  const reserveButton = screen.getByText("Reserve a Table");

  expect(dateLabel).toBeInTheDocument();
  expect(timeLabel).toBeInTheDocument();
  expect(guestsLabel).toBeInTheDocument();
  expect(occasionLabel).toBeInTheDocument();
  expect(reserveButton).toBeInTheDocument();
});


