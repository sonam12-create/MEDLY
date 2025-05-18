import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* left */}
        <div>
          <img className="mb-5 w-40" src={assets.MEDLY} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            At Medly, we believe in making healthcare simple, accessible, and
            patient-focused. Our mission is to bridge the gap between patients
            and doctors through seamless digital solutions. Whether you're
            booking appointments or finding the right specialist, Medly ensures
            a smooth, secure, and stress-free experience. We are committed to
            empowering communities with better healthcare—right at their
            fingertips.
          </p>
        </div>

        {/* middle */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 tet-gray-600">
            <li onClick={() => navigate("/")}>Home</li>
            <li onClick={() => navigate("/about")}>About us</li>
            <li onClick={() => navigate("/contact")}>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* right */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 tet-gray-600">
            <li>+1-234-567-890</li>
            <li>medly@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* copyright */}
      <div>
        {/* <hr /> */}
        <p className="py-5 text-sm text-center">
          &copy; medly - All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
