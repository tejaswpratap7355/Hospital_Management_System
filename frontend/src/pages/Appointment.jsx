import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import Hero from "../components/Hero";

const Appoinment = () => {
  return (
    <>
      <Hero
        title={"Schedule Your Appointment | M.V. Hospital Maternity And Wellness"}
        imageUrl={"/signin.png"}
      />
      <AppointmentForm />
    </>
  );
};

export default Appoinment;
