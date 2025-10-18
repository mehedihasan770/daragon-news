import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaFacebook, FaTwitter } from "react-icons/fa6";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div>
        <div className="join join-vertical w-full">
          <button className="btn join-item bg-base-100 justify-start"><FaFacebook size={20}/> Facebook</button>
          <button className="btn join-item bg-base-100 justify-start"><FaTwitter size={20}/> Twitter</button>
          <button className="btn join-item bg-base-100 justify-start"><FaInstagram size={20}/> Instagram</button>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
