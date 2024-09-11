/* eslint-disable @typescript-eslint/no-unused-vars */

import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "../components/ui/BookingForm";
import "@testing-library/jest-dom";
import React from "react";

// Mock submit function
const mockSubmitForm = jest.fn();

// Mock dispatch function
const mockDispatch = jest.fn();

// Test Suite for BookingForm Component
describe("BookingForm Validation", () => {
  const availableTimes = ["17:00", "18:00", "19:00", "20:00"];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("BookingPage renders heading", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );
    const headingElement = screen.getByRole("heading", {
      name: /book a table/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  test("disables past dates from being selected", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const dateInput = screen.getByLabelText(/choose date/i) as HTMLInputElement;
    const pastDate = "2024-09-02"; // Ensure this is a past date based on current date

    // Try setting a past date
    fireEvent.change(dateInput, { target: { value: pastDate } });

    // Assert that the date input doesn't accept past dates
    expect(dateInput.value).not.toBe(pastDate);
  });

  test("disables submit button when form is incomplete or invalid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    const dateInput = screen.getByLabelText(/choose date/i) as HTMLInputElement;
    const timeSelect = screen.getByLabelText(
      /choose time/i
    ) as HTMLSelectElement;
    const guestsInput = screen.getByLabelText(
      /number of guests/i
    ) as HTMLInputElement;

    // Initially, the button should be disabled
    expect(submitButton).toBeDisabled();

    // Fill only some of the fields
    fireEvent.change(dateInput, { target: { value: "2023-06-20" } });
    fireEvent.change(guestsInput, { target: { value: "2" } });

    // Submit button should still be disabled because not all fields are filled
    expect(submitButton).toBeDisabled();
  });

  test("enables submit button when all fields are valid", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    const dateInput = screen.getByLabelText(/choose date/i) as HTMLInputElement;
    const timeSelect = screen.getByLabelText(
      /choose time/i
    ) as HTMLSelectElement;
    const guestsInput = screen.getByLabelText(
      /number of guests/i
    ) as HTMLInputElement;

    // Fill all required fields
    fireEvent.change(dateInput, { target: { value: "2024-12-20" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: "3" } });

    // Submit button should now be enabled
    expect(submitButton).toBeEnabled();
  });

  test("form submission calls submitForm with valid data", () => {
    render(
      <BookingForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    const dateInput = screen.getByLabelText(/choose date/i) as HTMLInputElement;
    const timeSelect = screen.getByLabelText(
      /choose time/i
    ) as HTMLSelectElement;
    const guestsInput = screen.getByLabelText(
      /number of guests/i
    ) as HTMLInputElement;
    const occasionSelect = screen.getByLabelText(
      /occasion/i
    ) as HTMLSelectElement;

    // Fill all required fields
    fireEvent.change(dateInput, { target: { value: "2024-09-20" } });
    fireEvent.change(timeSelect, { target: { value: "18:00" } });
    fireEvent.change(guestsInput, { target: { value: 2 } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    // Submit the form
    fireEvent.click(submitButton);

    // Expect submitForm to be called with the form data
    expect(mockSubmitForm).toHaveBeenCalledWith({
      resDate: "2024-09-20",
      resTime: "18:00",
      guests: 2,
      occasion: "Birthday",
    });
  });
});

// import { render, screen } from "@testing-library/react";
// import BookingForm from "../components/ui/BookingForm";
// import "@testing-library/jest-dom";
// import BookingsPage from "@/app/booking/page";
// import React from "react";

// // Mock the reducer and initial state
// const mockInitialState = {
//   availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
// };

// const mockReducer = jest.fn((state, action) => {
//   if (action.type === "UPDATE_TIMES") {
//     // For now, just return the same state
//     return state;
//   }
//   return state;
// });

// // Mock the useReducer hook
// jest.mock("react", () => ({
//   ...jest.requireActual("react"),
//   useReducer: jest.fn((reducer, initialState) => [initialState, jest.fn()]),
// }));

// describe("Booking Component", () => {
//   beforeEach(() => {
//     (React.useReducer as jest.Mock).mockImplementation(
//       (reducer, initialState) => [initialState, jest.fn()]
//     );
//   });

//   test("BookingPage renders heading", () => {
//     render(<BookingsPage />);
//     const headingElement = screen.getByRole("heading", {
//       name: /book a table/i,
//     });
//     expect(headingElement).toBeInTheDocument();
//   });

//   test("initializeTimes returns correct initial state", () => {
//     const initialState = mockInitialState;
//     expect(initialState.availableTimes).toEqual([
//       "17:00",
//       "18:00",
//       "19:00",
//       "20:00",
//       "21:00",
//       "22:00",
//     ]);
//   });

//   test("updateTimes returns the same value provided in the state", () => {
//     const initialState = mockInitialState;
//     const newState = mockReducer(initialState, {
//       type: "UPDATE_TIMES",
//       payload: "2023-06-20",
//     });
//     expect(newState).toEqual(initialState);
//   });
// });
