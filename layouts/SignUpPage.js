import React from "react";
import Link from "next/link"; // Import Link from next/link

import styles from "./SignUpPage.module.css";
const SignUpPage = ({ handleSendOtp }) => {
  return (
    <div>
      <h2>Welcome!!</h2>

      <label>
        <span>Email</span>
        <input type="email" />
      </label>
      <button
        type="button"
        className="submit"
        style={{ marginTop: "50px" }}
        onClick={handleSendOtp}
      >
        Send OTP
      </button>

      <div className="lines">
        <div className="firstline"></div>
        <br />
        <div>
          <h4>Or</h4>
        </div>
        <br />
        <div className="firstline"></div>
      </div>

    </div>
  );
};

export default SignUpPage;
