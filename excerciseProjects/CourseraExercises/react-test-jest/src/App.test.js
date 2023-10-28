// import { fireEvent, render } from "@testing-library/react";
// import FeedbackForm from "./FeedBackForm";

// describe("Feedback Form", () => {
//   test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
//     const score = "3";
//     const comment = "The pizza crust was too thick";
//     const handleSubmit = jest.fn();
//     render(<FeedbackForm onSubmit={handleSubmit} />);

//     // Find the score input and change its value
//     const scoreInput = screen.getByLabelText("Score: 10 ⭐");
//     fireEvent.change(scoreInput, { target: { value: score } });

//     // Find the comment input and change its value
//     const commentInput = screen.getByLabelText("Comments:");
//     fireEvent.change(commentInput, { target: { value: comment } });

//     // Find and click the submit button
//     const submitButton = screen.getByText("Submit");
//     fireEvent.click(submitButton);

//     // Check if handleSubmit was called with the correct values
//     expect(handleSubmit).toHaveBeenCalledWith({
//       score,
//       comment,
//     });
//   });

//   test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
//     const score = "9";
//     const handleSubmit = jest.fn();
//     render(<FeedbackForm onSubmit={handleSubmit} />);

//     // Find the score input and change its value
//     const scoreInput = screen.getByLabelText("Score: 10 ⭐");
//     fireEvent.change(scoreInput, { target: { value: score } });

//     // Find and click the submit button
//     const submitButton = screen.getByText("Submit");
//     fireEvent.click(submitButton);

//     // Check if handleSubmit was called with the correct values (empty comment)
//     expect(handleSubmit).toHaveBeenCalledWith({
//       score,
//       comment: "",
//     });
//   });
// });
import { fireEvent, render, screen } from "@testing-library/react";
import FeedbackForm from "./FeedBackForm";

describe("Feedback Form", () => {
  test("User is able to submit the form if the score is lower than 5 and additional feedback is provided", () => {
    const score = "3";
    const comment = "The pizza crust was too thick";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const textArea = screen.getByLabelText(/Comments:/);
    fireEvent.change(textArea, { target: { value: comment } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment,
    });
  });

  test("User is able to submit the form if the score is higher than 5, without additional feedback", () => {
    const score = "9";
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit} />);

    const rangeInput = screen.getByLabelText(/Score:/);
    fireEvent.change(rangeInput, { target: { value: score } });

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      score,
      comment: ""
    });
  });
});
