"use client";
import Head from "next/head";
import { useState } from "react";

const Posts = () => {
  const [city, setCity] = useState("Bhopal"); // Input field value
  const [cityName, setCityName] = useState("Bhopal"); // Displayed city after submission
  const [temp, setTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();

    // Set the cityName to the user input (city) when the form is submitted
    setCityName(city);

    // Fetch weather data from the API
    const url = `http://api.weatherapi.com/v1/current.json?key=84fcc96edc724593a3293433242209&q=${city}&aqi=no`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      // Update state with weather data from the API
      setTemp(data.current.temp_c);
      setMinTemp(data.current.temp_c); // Assuming the same temp for simplicity
      setHumidity(data.current.humidity);
      setFeelsLike(data.current.feelslike_c);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <>
      <Head>
        <title>AgriTech-Weather</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
          crossOrigin="anonymous"
        />
      </Head>

      <div className="bgimg">
        <div className="container">
          {/* Search Form */}
          <form
            className="d-flex formid"
            role="search"
            onSubmit={handleSearch}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <input
              id="city"
              style={{height:'50px',textAlign:'center'}}
              className="form-control me-2 placeholder-glow"
              type="search"
              placeholder="Type city"
              aria-label="Search"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button
              className="btn"
              type="submit"
              style={{
                backgroundColor: "#8BC34A", // Set the background color to green
                color: "white", // Text color
                borderRadius: "50px", // Fully rounded corners
                border: "none", // Remove the border outline
                padding: "10px 20px", // Padding for spacing around the text
                fontSize: "16px", // Adjust font size
                cursor: "pointer", // Change cursor on hover
                width: "100px", // Fixed width
                height: "55px", // Fixed height
                textAlign: "center", // Center the text inside the button
                fontWeight: "bold", // Make the text bold
              }}
            >
              Search
            </button>
          </form>

          {/* Display City after Search */}
          <h1 className="my-4 text-light text-center text-primary">
            Weather for <span id="cityName">{cityName}</span>
          </h1>

          {/* Weather Information */}
          <main>
            <div className="row row-cols-1 row-cols-md-3 mb-3 text-center ">
              {/* Temperature Card */}
              <div className="col project-card">
                <div className="card mb-4 project-card-view rounded-3 shadow-sm border-success  border-border">
                  <div className="card-header py-3 text-bg-dark">
                    <h4 className="my-0 fw-normal text-primary">Temperatures</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title text-primary">
                      {temp}
                      <small className="text-body-light fw-bolder text-primary">
                        <sup>&#8451;</sup>
                      </small>
                    </h1>
                    <ul className="list-unstyled fw-bolder mt-1 mb-1">
                      <li className="text-primary">Temperature is {temp}</li>
                      <li className="text-primary">Min Temperature is {minTemp}</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Humidity Card */}
              <div className="col project-card">
                <div className="card mb-4 rounded-3 project-card-view shadow-sm border-success border-border">
                  <div className="card-header py-3 text-bg-dark">
                    <h4 className="my-0 fw-normal text-primary">Humidity Info</h4>
                  </div>
                  <div className="card-body">
                    <h1 className="card-title pricing-card-title text-primary">
                      {humidity}
                      <small className="text-body-light fw-bold text-primary"> %</small>
                    </h1>
                    <ul className="list-unstyled fw-bolder mt-3 mb-4">
                      <li className="text-primary">Humidity is {humidity}</li>
                      <li className="text-primary">Feels Like {feelsLike}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Posts;
