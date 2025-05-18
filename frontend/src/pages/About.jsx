import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-700">
        <p  className="text-gray-700 font-medium">
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-20">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} alt="" />
        <div className="flex flex-col gap-6 justify-center md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Medly, your trusted partner in managing healthcare
            appointments with ease, efficiency, and reliability. At Medly, we
            understand the everyday challenges patients face when it comes to
            finding the right doctor, scheduling appointments, and keeping track
            of medical history.
          </p>
          <p>
            Medly is dedicated to transforming the healthcare experience through
            smart technology. Our platform is designed to simplify the entire
            process—from booking your first appointment to managing long-term
            care. Whether you're visiting a doctor for the first time or need
            ongoing support, Medly is here to assist you at every step.
          </p>
          <b className="text-gray-800">Our Vision</b>
          <p>
            At Medly, our vision is to create a seamless, user-friendly
            healthcare journey for everyone. We aim to bridge the gap between
            patients and healthcare providers by offering a digital platform
            that makes it easier to access care anytime, anywhere.
          </p>
        </div>
      </div>

      <div className="text-xl my-4 text-gray-700">
        <p>WHY CHOOSE US</p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Efficiency</b>
          <p>Streamlined Appointment Scheduling that fits into your busy lifestyle.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Convenience</b>
          <p>Access to a network of trusted healthcare professionals in your area.</p>
        </div>

        <div className="border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b>Personalization</b>
          <p>Tailored care plans based on your unique needs and preferences.</p>
        </div>
      </div>

    </div>
  );
};

export default About;
