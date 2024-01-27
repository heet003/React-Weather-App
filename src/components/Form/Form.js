import React, { useState } from "react";
import "./Form.css";
import Result from "../../Result/Result";
import Header from "../Header/Header";
let url;
let result;

function Form() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  async function submitHandler(e) {
    e.preventDefault();
    url =
      "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=7b1762da305dfdfc7d9a6ec49e0d22fb" +
      "&q=" +
      cityName;
    try {
      const response = await fetch(url);
      result = await response.json();
      // let text  = ("Hi").toLocaleUpperCase();
      setWeatherData(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setCityName("");
  }
  return (
    <React.Fragment>
      <div className="form-container">
        <form onSubmit={submitHandler}>
          <input
            className="text-input"
            placeholder="Search.."
            value={cityName}
            onChange={(e) => {
              setCityName(e.target.value.toUpperCase());
            }}
          ></input>
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="rgb(0, 0, 0)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
          </button>
        </form>
      </div>
      {weatherData ? (
        <Result data={weatherData}></Result>
      ) : (
        <Header className="instruction" title="Enter Valid City/State/Country Name." />
      )}
    </React.Fragment>
  );
}

export default Form;
