"use client";

import Link from "next/link";
import Cta from "./components/Cta";
import diseaseimage from "../public/images/diseasedetector.jpg";
import Image from "next/image";
import { useRef } from "react";

function Pricing({ data }) {
  const {
    frontmatter: { title, plans, call_to_action },
  } = data;

  const fileInputRef = useRef();

  // Handle file selection or captured image
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("File selected:", file);
      // Perform further processing or API call here
    }
  };

  return (
    <section className="section">
      <h4 style={{ display: "flex", justifyContent: "center", fontWeight: "normal" }}>
        Disease Detection System
      </h4>
      <div
        style={{
          display: "flex",
          gap: "100px",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <div>
          <Image
            src={diseaseimage}
            height={500}
            width={500}
            style={{ borderRadius: "50%", margin: "0 auto" }}
            alt="Disease Detector"
          />
        </div>
        <div style={{ maxWidth: "500px" }}>
          <h5>Why and How to use it?</h5>
          <p>
            Capture or upload an image of your crop's infected part directly in the app. Our powerful AI model will
            analyze the image to identify the disease affecting your crop with high accuracy. Once diagnosed, you’ll
            receive detailed insights about the disease, including symptoms, causes, and preventive measures. For
            personalized guidance on treatment and medication, consult <b>KrishiBot</b>, your smart agricultural
            assistant, available 24/7 to address your concerns. With this seamless integration of technology and
            agriculture, managing crop health becomes effortless, ensuring better yield and sustainability. Empower
            your farming journey with expert assistance at your fingertips!
          </p>
          <div
            style={{
              marginTop: "20px",
              display: "flex",
              justifyContent: "center", // Center horizontally
              alignItems: "center", // Center vertically
            }}
          >
            {/* Hidden file input for uploading */}
            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={handleFileUpload}
            />

            {/* File input for capturing image */}
            <input
              type="file"
              accept="image/*"
              capture="environment" // Opens the rear camera on mobile devices
              style={{ display: "none" }}
              id="captureInput"
              onChange={handleFileUpload}
            />

            {/* Capture Image Button */}
            <button
              onClick={() => document.getElementById("captureInput").click()}
              style={{
                padding: "10px 20px",
                backgroundColor: "#D49A42",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Upload Image
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;
