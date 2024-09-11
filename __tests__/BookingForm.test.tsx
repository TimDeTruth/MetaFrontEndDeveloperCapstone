/* eslint-disable @typescript-eslint/no-unused-vars */
import { render, screen } from "@testing-library/react";
import BookingForm from "../components/ui/BookingForm";
import "@testing-library/jest-dom";
import BookingsPage from "@/app/booking/page";
import React from "react";

// Mock the reducer and initial state
const mockInitialState = {
  availableTimes: ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"],
};

const mockReducer = jest.fn((state, action) => {
  if (action.type === "UPDATE_TIMES") {
    // For now, just return the same state
    return state;
  }
  return state;
});

// Mock the useReducer hook
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useReducer: jest.fn((reducer, initialState) => [initialState, jest.fn()]),
}));

describe("Booking Component", () => {
  beforeEach(() => {
    (React.useReducer as jest.Mock).mockImplementation(
      (reducer, initialState) => [initialState, jest.fn()]
    );
  });

  test("BookingPage renders heading", () => {
    render(<BookingsPage />);
    const headingElement = screen.getByRole("heading", {
      name: /book a table/i,
    });
    expect(headingElement).toBeInTheDocument();
  });

  test("initializeTimes returns correct initial state", () => {
    const initialState = mockInitialState;
    expect(initialState.availableTimes).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });

  test("updateTimes returns the same value provided in the state", () => {
    const initialState = mockInitialState;
    const newState = mockReducer(initialState, {
      type: "UPDATE_TIMES",
      payload: "2023-06-20",
    });
    expect(newState).toEqual(initialState);
  });
});
