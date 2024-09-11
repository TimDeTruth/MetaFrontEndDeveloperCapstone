/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, FormEvent, useEffect } from "react";
import Script from "next/script";
import { seededRandom, fetchAPI, submitAPI } from "@/api/api";

interface BookingFormProps {
  availableTimes: string[];
  dispatch: React.Dispatch<{ type: string; payload?: string }>; // Accept the dispatch function as a prop
  submitForm: (formData: {
    resDate: string;
    resTime: string;
    guests: number;
    occasion: string;
  }) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  availableTimes,
  dispatch,
  submitForm,
}) => {
  // const [availableTimes, setAvailableTimes] = useState<string[]>([
  //   "17:00",
  //   "18:00",
  //   "19:00",
  //   "20:00",
  //   "21:00",
  //   "22:00",
  // ]);

  const [formData, setFormData] = useState({
    resDate: "",
    resTime: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Dispatch the date change if the user is selecting a date
    if (name === "resDate") {
      dispatch({ type: "UPDATE_TIMES", payload: value }); // Pass the selected date in the payload
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Here you would typically send the data to an API or perform other actions

    // Call the submitForm function passed via props
    submitForm(formData);
  };

  const isValidDate = (dateString: string) => {
    // const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format

    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    console.log("the date", today);

    return dateString >= today;
  };

  // Check if the form is valid
  useEffect(() => {
    const { resDate, resTime, guests, occasion } = formData;
    console.log("the res date", resDate);
    if (resDate && resTime && guests > 0 && occasion && isValidDate(resDate)) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  }, [formData]);

  const stylingBorder = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    width: "100%",
  };

  return (
    <>
      {/* Dynamically load the external script */}
      {/* <Script
        src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"
        strategy="lazyOnload"
        onLoad={() => console.log("API script loaded!")}
      /> */}

      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          maxWidth: "40vw",
          gap: "20px",
          border: "1px solid #000",
          padding: "20px",
          borderRadius: "5px",
        }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="resDate"
          value={formData.resDate}
          onChange={handleChange}
          required
          style={stylingBorder}
          min={new Date().toISOString().split("T")[0]} // Disable past dates
        />

        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          name="resTime"
          value={formData.resTime}
          onChange={handleChange}
          required
          style={stylingBorder}
        >
          <option value="">Select a time</option>
          {availableTimes.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder="1"
          min="1"
          max="10"
          id="guests"
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          required
          style={stylingBorder}
        />

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
          required
          style={stylingBorder}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>

        <input
          type="submit"
          value="Make Your reservation"
          disabled={!isFormValid}
          aria-label="On Click"
          style={{
            ...stylingBorder,

            borderRadius: 20,
            backgroundColor: isFormValid ? "#F4CE14" : "#ccc",
            cursor: isFormValid ? "pointer" : "not-allowed",
          }}
        />
      </form>
    </>
  );
};

export default BookingForm;
