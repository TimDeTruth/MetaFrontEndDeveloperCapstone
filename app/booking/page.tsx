/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React, { useState, useReducer, useEffect } from "react";
import Navigation from "@/components/ui/Navigation";
import Footer from "../../components/Footer";
import BookingForm from "../../components/ui/BookingForm";
import { seededRandom, fetchAPI, submitAPI } from "@/api/api";
import { useRouter } from "next/navigation";

const BookingsPage: React.FC = () => {
  // const [availableTimes, setAvailableTimes] = useState<string[]>([
  //   "17:00",
  //   "18:00",
  //   "19:00",
  //   "20:00",
  //   "21:00",
  //   "22:00",
  // ]);

  const router = useRouter();

  const initializeTimes = () => {
    const d = new Date("2022-03-25");

    // console.log("the data", todayDate);
    return fetchAPI(d);
  };

  const updateTimes = (
    state: string[],
    action: { type: string; payload?: string }
  ) => {
    switch (action.type) {
      case "UPDATE_TIMES":
        const d = new Date();
        return fetchAPI(d);
      default:
        return state;
    }
  };

  useEffect(() => {
    console.log(initializeTimes());
  }, []);

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );

  const submitForm = (formData: {
    resDate: string;
    resTime: string;
    guests: number;
    occasion: string;
  }) => {
    if (submitAPI(formData)) {
      router.push("booking/confirmation");
    } else {
      console.log("booking was not confirmed");
    }
  };

  return (
    <div id="booking">
      <Navigation />
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-center">Book a Table</h1>
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />
      </main>
      <Footer />
    </div>
  );
};

export default BookingsPage;
